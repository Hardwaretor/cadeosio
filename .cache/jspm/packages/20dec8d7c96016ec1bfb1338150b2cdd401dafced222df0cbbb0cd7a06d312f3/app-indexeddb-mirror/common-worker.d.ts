/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-indexeddb-mirror/common-worker.js
 */

import {resolveUrl} from '@polymer/polymer/lib/utils/resolve-url.js';

export {CommonWorker};

/**
 * A proxy class for creating `SharedWorker` if available. If not available,
 * doubles as a `SharedWorker`-like wrapper for commonly held instances of
 * `WebWorker`.
 *
 * When creating `WebWorker` instances, only one `WebWorker` will be created
 * per value of `workerUrl`. The `WebWorker` instance will be shared amongst
 * all intances of `CommonWorker`, but a unique `MessageChannel` will be
 * created for each instance of `CommonWorker` in order to emulate the
 * unique `port` available to every reference to a `SharedWorker`.
 *
 * `WebWorker` instances can listen for a global `connect` event that is
 * semantically similar to the spec'd `connect` event in a `SharedWorker`.
 */
declare class CommonWorker {

  /**
   * A port that is unique to each instance of
   * CommonWorker. Messages posted to this port can be received inside of
   * the worker instance.
   */
  readonly port: any;

  /**
   * @param workerUrl The URL of the worker script to create a worker
   * instance with.
   * @param baseUri The base uri of app-storage/app-indexeddb-mirror
   */
  constructor(workerUrl: string, baseUri?: string);

  /**
   * A proxy method that forwards all calls to the backing `WebWorker`
   * instance.
   *
   * @param eventType The event to listen for
   * @param listenerFunction The function to be attached to the event
   * @param options addEventListener Options object
   */
  addEventListener(eventType: String|string|null|undefined, listenerFunction: Function|null, options?: object|null): any;

  /**
   * A proxy method that forwards all calls to the backing `WebWorker`
   * instance.
   *
   * @param removeEventListenerArgs The arguments to call the same
   * method on the `WebWorker` with.
   */
  removeEventListener(...removeEventListenerArgs: any[]): any;
}