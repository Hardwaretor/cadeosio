/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-overlay-manager.js
 */

import {IronA11yKeysBehavior} from '@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

import * as gestures from '@polymer/polymer/lib/utils/gestures.js';

export {IronOverlayManagerClass};

declare class IronOverlayManagerClass {

  /**
   * The shared backdrop element.
   */
  readonly backdropElement: Element;

  /**
   * The deepest active element.
   */
  readonly deepActiveElement: Element;
  constructor();

  /**
   * Adds the overlay and updates its z-index if it's opened, or removes it if
   * it's closed. Also updates the backdrop z-index.
   */
  addOrRemoveOverlay(overlay: Element): void;

  /**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   */
  addOverlay(overlay: Element): void;
  removeOverlay(overlay: Element): void;

  /**
   * Returns the current overlay.
   */
  currentOverlay(): Element|undefined;

  /**
   * Returns the current overlay z-index.
   */
  currentOverlayZ(): number;

  /**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   */
  ensureMinimumZ(minimumZ: number): void;
  focusOverlay(): void;

  /**
   * Updates the backdrop z-index.
   */
  trackBackdrop(): void;
  getBackdrops(): Element[];

  /**
   * Returns the z-index for the backdrop.
   */
  backdropZ(): number;
}