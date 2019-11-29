(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1>Getting Started</h1>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"getting-started\">\r\n  <div class=\"container\">\r\n\r\n    <mat-pages title=\"CADEOS.io\">\r\n      <!--1-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Setup Development Environment\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Please make sure that you have <a href=\"https://nodejs.org/en/\" mat-button\r\n                                                            color=\"primary\">NodeJS</a>\r\n            and <a href=\"https://www.npmjs.com/package/npm\"\r\n                   mat-button\r\n                   color=\"primary\">\r\n              npm</a>\r\n            running on your machine in order to be able to develop some wonderful apps.\r\n          </mat-card-title>\r\n          <mat-card>\r\n            <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <pre><code [highlight]=\"'$ node -v'\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"'node -v'\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage('node -v')\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <pre><code [highlight]=\"'$ npm -v'\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"'node -v'\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage('npm -v')\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-footer fxLayoutAlign=\"center\" style=\"flex-wrap: wrap\">\r\n              <a href=\"https://nodejs.org/en/download/\" mat-button\r\n                 color=\"primary\"> If they are not already downloaded, please install Node.js and npm </a>\r\n            </mat-card-footer>\r\n          </mat-card>\r\n          <mat-card>\r\n            <mat-card-subtitle>\r\n              Check if <a href=\"https://cli.angular.io/\" mat-button\r\n                          color=\"primary\">angular cli </a> is already installed globally\r\n            </mat-card-subtitle>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                <pre><code [highlight]=\"'$ ng -v'\"></code></pre>\r\n                <button mat-icon-button\r\n                        ngxClipboard\r\n                        [cbContent]=\"'ng -v'\"\r\n                        matTooltip=\"copy\"\r\n                        (click)=\"showCopyMessage('ng -v')\">\r\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n                </button>\r\n              </div>\r\n              <p>If angular cli is installed on you machine, you should get something like this</p>\r\n\r\n              <pre><code [highlight]=\"ngVersion\"></code></pre>\r\n\r\n              <p>If not please run the following command to install angular cli globally in order to create an angular\r\n                project</p>\r\n\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                <pre><code [highlight]=\"'$ npm install -g @angular/cli'\"></code></pre>\r\n                <button mat-icon-button\r\n                        ngxClipboard\r\n                        [cbContent]=\"'npm install -g @angular/cli'\"\r\n                        matTooltip=\"copy\"\r\n                        (click)=\"showCopyMessage('npm install -g @angular/cli')\">\r\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n                </button>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n\r\n      <!--2-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Setup Angular App\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title> Time to begin with Angular</mat-card-title>\r\n          <p>If you have already a setup angular project, you can skip this step, otherwise you can generate a project\r\n            via the angular cli by running the following</p>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code [highlight]=\"'$ ng new yourappname'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'ng new yourappname'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('ng new yourappname')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"generate new angular project\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fng_g_appname2.mp4?alt=media&token=d3e5b2d4-d806-44d9-a1ed-7a7b8a1c877f\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n\r\n            <div class=\"comment-container\">\r\n              <p>waiting......</p>\r\n            </div>\r\n\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"Done with generating the project\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fng_g_appname_done2.mp4?alt=media&token=1f7591bf-e147-4dd4-91c2-23793ffeed6b\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n\r\n            <div class=\"comment-container\">\r\n              <p> When the angular cli is done with generating the project, navigate to you your app\r\n                and check the project structure.</p>\r\n            </div>\r\n\r\n            <video *ngIf=\"true\" controls autoplay loop\r\n                   aria-label=\"go into the generated project and checkout the generated files\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fcd_angularapp.mp4?alt=media&token=830c3b21-ad94-405b-8b9f-d1ee4504685d\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n\r\n      <!--3-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Peer dependencies\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Animations + Material + CDK + FlexLayout + Firebase + Angularfire2</mat-card-title>\r\n          <div class=\"comment-container\">\r\n            <p><a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\"\r\n                  mat-button\r\n                  color=\"primary\">\r\n              ngx-auth-firebaseui\r\n            </a>\r\n              is built on the top of\r\n              <a href=\"https://www.npmjs.com/package/@angular/material\"\r\n                 mat-button\r\n                 color=\"primary\">\r\n                angular material\r\n              </a> and\r\n              <a href=\"https://www.npmjs.com/package/@angular/cdk\"\r\n                 mat-button\r\n                 color=\"primary\">\r\n                angular component development kit\r\n              </a> ! That's why we need to install them as peer dependencies to the ngx-auth-firebaseui module.\r\n            </p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code [highlight]=\"'$ npm i -s @angular/material @angular/cdk'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'npm i -s @angular/material @angular/cdk'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('npm i -s @angular/material @angular/cdk')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div fxLayoutAlign=\"center\">\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"install angular material and angular cdk with npm\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_material_cdk.mp4?alt=media&token=1cc60fb7-e347-4212-9f61-5b4ed527dd3e\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>\r\n              Furthermore, <a href=\"https://www.npmjs.com/package/@angular/animations\"\r\n                              mat-button\r\n                              color=\"primary\">\r\n              angular animations\r\n            </a> is required too to provide advanced transitions between the components.\r\n            </p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code [highlight]=\"'$ npm i -s @angular/animations'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'npm i -s @angular/animations'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('npm i -s @angular/animations')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div fxLayoutAlign=\"center\">\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"install angular animations with npm\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_animations.mp4?alt=media&token=c8fcac6a-7fd6-48ab-871b-785991eb2fdb\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>Now it's time to import the animations module.</p>\r\n          </div>\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <pre><code [highlight]=\"importBrowserAnimationsModule\"></code></pre>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <mat-card-footer fxLayoutAlign=\"center\">\r\n            <a href=\"https://material.angular.io/guide/getting-started#step-2-animations\"\r\n               mat-button color=\"primary\">Learn more</a>\r\n          </mat-card-footer>\r\n\r\n          <!--<div fxLayoutAlign=\"center\">-->\r\n          <!--<video *ngIf=\"true\" controls autoplay loop aria-label=\"install angular animations with npm\">-->\r\n          <!--<source-->\r\n          <!--src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_animations.mp4?alt=media&token=c8fcac6a-7fd6-48ab-871b-785991eb2fdb\"-->\r\n          <!--type=\"video/mp4\">-->\r\n          <!--</video>-->\r\n          <!--</div>-->\r\n\r\n          <div class=\"comment-container\">\r\n            <p>Fire Fire Firebase!</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code [highlight]=\"'$ npm i -s firebase @angular/fire'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'npm i -s firebase @angular/fire'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('npm i -s firebase @angular/fire')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n\r\n      <!--4-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Material Theme\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Styling and more...</mat-card-title>\r\n          <div class=\"comment-container\">\r\n            <p>In order to use angular material/ material design, we need include at least one theme.\r\n              To get started, you can just import one of the prebuilt material themes from the angular material module\r\n              in your style.css file.</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code [highlight]=\"importMaterialThemeSCSS\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"importMaterialThemeSCSS\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage(importMaterialThemeSCSS)\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div fxLayoutAlign=\"center\">\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of linking's material design themes\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fimport_theme.mp4?alt=media&token=5011fdd5-48c9-4f2d-8f36-61bdf78be460\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>Or create your own material theme and import it in the style.css file</p>\r\n          </div>\r\n          <div fxLayoutAlign=\"center\">\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of creating a custom material theme\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fimport_custom_theme.mp4?alt=media&token=f2995ca2-1bc6-4a1a-b8b6-6ce259ff26c6\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n          <mat-card>\r\n            <mat-card-subtitle>Custom material theme</mat-card-subtitle>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                <pre><code [highlight]=\"customMaterialTheme\"></code></pre>\r\n                <button mat-icon-button\r\n                        ngxClipboard\r\n                        [cbContent]=\"customMaterialTheme\"\r\n                        matTooltip=\"copy\"\r\n                        (click)=\"showCopyMessage(customMaterialTheme)\">\r\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n                </button>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-footer fxLayoutAlign=\"center\">\r\n              <a href=\"https://material.angular.io/guide/theming\"\r\n                 target=\"_blank\"\r\n                 mat-button\r\n                 color=\"primary\">\r\n                <mat-icon>link</mat-icon>\r\n                Learn more about angular material themes</a>\r\n            </mat-card-footer>\r\n          </mat-card>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n\r\n      <!--5-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Material Icons\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Linking the icons</mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"comment-container\">\r\n              <p>The easiest way to load the material design icons is to provide the\r\n                following link in your\r\n              <p>\r\n              <pre><code [highlight]=\"'index.html '\"></code></pre>\r\n              <p>file </p>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <pre><code [highlight]=\"materialIconsLink\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"materialIconsLink\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage(materialIconsLink)\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div fxLayoutAlign=\"center\">\r\n              <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of linking material design icons\">\r\n                <source\r\n                  src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Flink_material_design_icons.mp4?alt=media&token=d3e7848b-6977-4044-909c-c75b701988a4\"\r\n                  type=\"video/mp4\">\r\n              </video>\r\n            </div>\r\n            <div class=\"comment-container\">\r\n              <p>Or, if you want to host the material design icons by yourself, please follow these two steps.</p>\r\n            </div>\r\n\r\n            <div class=\"comment-container\">\r\n              <p>First, install the <a href=\"https://www.npmjs.com/package/material-design-icons\"\r\n                                       mat-button color=\"primary\">material design icons' npm module</a></p>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <pre><code [highlight]=\"'$ npm i -s material-design-icons'\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"'npm i -s material-design-icons'\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage('npm i -s material-design-icons')\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"comment-container\">\r\n              <p>After that, you need to update you\r\n              <p>\r\n              <pre><code [highlight]=\"'angular.json'\"></code></pre>\r\n              <p>files. Under the styles sections, add\r\n                the path of the material design icons in order to be imported to your distribution files\r\n                when you build your app. <i>See below</i></p>\r\n            </div>\r\n            <div class=\"comment-container\">\r\n              <p>First of all, copy the path of the material design icons</p>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code highlight\r\n                       [highlight]=\"'node_modules/material-design-icons/iconfont/material-icons.css'\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"'node_modules/material-design-icons/iconfont/material-icons.css'\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage('node_modules/material-design-icons/iconfont/material-icons.css')\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"comment-container\">\r\n              <p>Adjust your angular.json file</p>\r\n            </div>\r\n            <mat-card-subtitle>Before</mat-card-subtitle>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code highlight\r\n                       [highlight]=\"stylesBeforeImportMDI\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"stylesBeforeImportMDI\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage(stylesBeforeImportMDI)\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </div>\r\n            <mat-card-subtitle>After</mat-card-subtitle>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code highlight\r\n                       [highlight]=\"stylesAfterImportMDI\"></code></pre>\r\n              <button mat-icon-button\r\n                      ngxClipboard\r\n                      [cbContent]=\"stylesAfterImportMDI\"\r\n                      matTooltip=\"copy\"\r\n                      (click)=\"showCopyMessage(stylesAfterImportMDI)\">\r\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div fxLayoutAlign=\"center\">\r\n              <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of selfhosting material design icons\">\r\n                <source\r\n                  src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fmaterial_design_icons_self_hosting.mp4?alt=media&token=8b444b0e-62b5-4fc4-b925-aa81cf2dff9e\"\r\n                  type=\"video/mp4\">\r\n              </video>\r\n            </div>\r\n            <div class=\"comment-container\">\r\n              <p>Great! You are done with the basics\r\n                <mat-icon color=\"accent\">done</mat-icon>\r\n              </p>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-footer fxLayoutAlign=\"center\">\r\n            <a href=\"https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons\"\r\n               target=\"_blank\"\r\n               mat-button\r\n               color=\"primary\">\r\n              <mat-icon>link</mat-icon>\r\n              Learn more about angular material icons</a>\r\n          </mat-card-footer>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n\r\n      <!--6-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Installation\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Here we go\r\n            <mat-icon>flight_takeoff</mat-icon>\r\n          </mat-card-title>\r\n          <div class=\"comment-container\">\r\n            Open a new terminal and run the following command to get\r\n            <a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\" mat-button\r\n               color=\"primary\">ngx-auth-firebaseui</a>\r\n            from npm\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <pre><code highlight\r\n                       [highlight]=\"'$ npm i -s ngx-auth-firebaseui'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'npm i -s ngx-auth-firebaseui'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('npm i -s ngx-auth-firebaseui')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div fxLayoutAlign=\"center\">\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of installing ngx-auth-firebaseui via npm\">\r\n              <source\r\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_ngx_auth_firebaseui.mp4?alt=media&token=8c17ba14-9a8c-4e40-80ac-df8388a5eaa5\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>Now you just need to import the library </p>\r\n          </div>\r\n          <mat-card>\r\n            <mat-card-title>SystemJS</mat-card-title>\r\n            <mat-card-subtitle>\r\n              Note:If you are using SystemJS, you should adjust your configuration to point to the UMD\r\n              bundle. In your systemjs config file, map needs to tell the System loader where to look for\r\n              ngx-auth-firebaseui\r\n            </mat-card-subtitle>\r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"systemJSModuleImport\"></code></pre>\r\n                <button mat-icon-button\r\n                        ngxClipboard\r\n                        [cbContent]=\"systemJSModuleImport\"\r\n                        matTooltip=\"copy\"\r\n                        (click)=\"showCopyMessage(systemJSModuleImport)\">\r\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n                </button>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n          <div class=\"comment-container\">\r\n            <p>Once installed you need to import the main module:</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"importNgxAuthFirebaseUIModule\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"importNgxAuthFirebaseUIModule\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage(importNgxAuthFirebaseUIModule)\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>The only remaining part is to list the imported module in your application module. The exact method\r\n              will be slightly different for the root (top-level) module for which you should end up with the code\r\n              similar to (notice NgxMaterialPagesModule .forRoot()):\r\n\r\n              NB: please do not forget to import the angular animations module in your root component too!\r\n              (usally app.component.ts)</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"importNgxAuthFirebaseUIModuleInAppModule\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"importNgxAuthFirebaseUIModuleInAppModule\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage(importNgxAuthFirebaseUIModuleInAppModule)\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>Please do not forget to add your configuration to the module. The is absolutely required to link\r\n              your firebase project with</p>\r\n            <pre><code highlight\r\n                       [highlight]=\"'ngx-auth-firebaseui'\"></code></pre>\r\n            <p>See below again...</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"firebaseConfiguration\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"firebaseConfiguration\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage(firebaseConfiguration)\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>Other modules in your application can simply import NgxMaterialPagesModule:</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"importNgxAuthFirebaseUIModuleInOtherModule\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"importNgxAuthFirebaseUIModuleInOtherModule\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage(importNgxAuthFirebaseUIModuleInOtherModule)\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n\r\n      <!--7-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Copy Asset to angular.json\"></mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>We need ngx-auth-firebaseui's assets</mat-card-title>\r\n\r\n          <mat-card>\r\n            <mat-card-title>Via Angular CLI</mat-card-title>\r\n            <mat-card-content>\r\n              <div class=\"comment-container\">\r\n                <p>First of all, open the following file</p>\r\n                <pre><code highlight\r\n                           [highlight]=\"'angular.json'\"></code></pre>\r\n                <p>after that, add the following snippet under the <strong>assets</strong> section</p>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"copyAssetSnippet\"></code></pre>\r\n                  <button mat-icon-button\r\n                          ngxClipboard\r\n                          [cbContent]=\"copyAssetSnippet\"\r\n                          matTooltip=\"copy\"\r\n                          (click)=\"showCopyMessage(copyAssetSnippet)\">\r\n                    <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n                  </button>\r\n                </div>\r\n                <p>Now, the required images will be copied to the assets directory and they will be available for your\r\n                  app.\r\n                  The assets section should look</p>\r\n              </div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"afterCopyingAssestSnippet\"></code></pre>\r\n                <button mat-icon-button\r\n                        ngxClipboard\r\n                        [cbContent]=\"afterCopyingAssestSnippet\"\r\n                        matTooltip=\"copy\"\r\n                        (click)=\"showCopyMessage(afterCopyingAssestSnippet)\">\r\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n                </button>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n\r\n          <mat-card>\r\n            <mat-card-title>Without Angular CLI</mat-card-title>\r\n            <mat-card-content>\r\n              <div class=\"comment-container\">\r\n                <p>copy the assets directory into the root of your project, so that your app can get the required images\r\n                  for the UI. This is an example of requesting an image from the library Request\r\n                  URL:http://localhost:4200/assets/google.svg.\r\n                  Please make sur that the images will be hosted in the right place</p>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-content>\r\n\r\n            </mat-card-content>\r\n          </mat-card>\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--8-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Usage\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Library's components</mat-card-title>\r\n          <mat-card-subtitle>This library consists of 2 essential components.</mat-card-subtitle>\r\n\r\n          <mat-card class=\"lib-compontent\">\r\n            <mat-card-title>\r\n              <pre><code highlight\r\n                         [highlight]=\"'<ngx-auth-firebaseui></ngx-auth-firebaseui>'\"></code></pre>\r\n              <mat-card-subtitle>\r\n                ngx-auth-firebaseui the main container that is used for the authentication process\r\n              </mat-card-subtitle>\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n              <ngx-auth-firebaseui></ngx-auth-firebaseui>\r\n            </mat-card-content>\r\n          </mat-card>\r\n\r\n          <mat-card>\r\n            <mat-card-title>\r\n              <pre><code highlight\r\n                         [highlight]=\"'<ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>'\"></code></pre>\r\n            </mat-card-title>\r\n            <mat-card-subtitle>\r\n              ngx-auth-firebaseui-user is used to display/edit the data of the current authenticated user.\r\n              Please note if you want to try out this component, you need to be authenticated. So if you sign in/up,\r\n              <strong>ngx-auth-firebaseui-user</strong> will be displayed.\r\n            </mat-card-subtitle>\r\n            <mat-card-content>\r\n              <ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--8-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Run demo locally\">\r\n          <img style=\"width: 50px; height: 50px\" src=\"../../assets/icons/github.svg\">\r\n        </mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title-group><a href=\"https://github.com/AnthonyNahas/ngx-auth-firebaseui\"\r\n                                   mat-button\r\n                                   color=\"primary\">Clone the repo</a></mat-card-title-group>\r\n          <mat-card-title>Interested? Try it out on your machine\r\n          </mat-card-title>\r\n          <div class=\"comment-container\">\r\n            <p>Clone this repo by running this following command</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"'git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>install the dependencies</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"'$ npm i'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'npm i'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('npm i')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>Link ngx-auth-firebaseui</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"'$ gulp link'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'gulp link'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('gulp link')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>navigate to the demo directory</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"'$ cd demo'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'cd demo'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('cd demo')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>install the dependencies</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"'$ npm i'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'npm i'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('npm i')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>start the app</p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                 <pre><code highlight\r\n                            [highlight]=\"'$ ng serve --open'\"></code></pre>\r\n            <button mat-icon-button\r\n                    ngxClipboard\r\n                    [cbContent]=\"'ng serve --open'\"\r\n                    matTooltip=\"copy\"\r\n                    (click)=\"showCopyMessage('ng serve --open')\">\r\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"comment-container\">\r\n            <p>the app is now hosted on http://localhost:4200/</p>\r\n          </div>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n    </mat-pages>\r\n\r\n  </div>\r\n\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/getting-started/getting-started-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/getting-started/getting-started-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GettingStartedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedRoutingModule", function() { return GettingStartedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/getting-started/getting-started.component.ts");




let GettingStartedRoutingModule = class GettingStartedRoutingModule {
};
GettingStartedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"] }
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], GettingStartedRoutingModule);



/***/ }),

/***/ "./src/app/getting-started/getting-started.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".getting-started {\n  margin-top: 1rem;\n}\n\n.main-container {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n\n.demo-sidenav-area {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-sidenav-area .mat-toolbar {\n  flex: 0;\n}\n\n.demo-sidenav-area .mat-sidenav-container {\n  flex: 1;\n}\n\n.demo-sidenav-area .demo-sidenav-content {\n  padding: 32px;\n}\n\n.demo-sidenav-area .demo-filler-content {\n  padding: 60px;\n}\n\nvideo {\n  max-width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.comment-container {\n  margin: 1rem;\n}\n\n.mat-button {\n  white-space: normal !important;\n}\n\n.lib-compontent {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL0M6XFxVc2Vyc1xcZ2dhbGluZDFcXGNhZGVvc2lvL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXGdldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFFRSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsY0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURHRTtFQUNFLE9BQUE7QUNESjs7QURJRTtFQUNFLE9BQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7QUNISjs7QURNRTtFQUNFLGFBQUE7QUNKSjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRQTtFQUNFLDhCQUFBO0FDTEY7O0FEWUE7RUFDRSxtQkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZXR0aW5nLXN0YXJ0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDEuMHJlbTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLy9wYWRkaW5nOiA0OHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZGVtby1zaWRlbmF2LWFyZWEge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAubWF0LXRvb2xiYXIge1xyXG4gICAgZmxleDogMDtcclxuICB9XHJcblxyXG4gIC5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5kZW1vLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRlbW8tZmlsbGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vOjpuZy1kZWVwIG5neC1hdXRoLWZpcmViYXNldWkgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcclxuLy8gIGRpc3BsYXk6IGZsZXg7XHJcbi8vfVxyXG5cclxuLmxpYi1jb21wb250ZW50e1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIiwiLmdldHRpbmctc3RhcnRlZCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kZW1vLXNpZGVuYXYtYXJlYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRlbW8tc2lkZW5hdi1hcmVhIC5tYXQtdG9vbGJhciB7XG4gIGZsZXg6IDA7XG59XG4uZGVtby1zaWRlbmF2LWFyZWEgLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG4uZGVtby1zaWRlbmF2LWFyZWEgLmRlbW8tc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMzJweDtcbn1cbi5kZW1vLXNpZGVuYXYtYXJlYSAuZGVtby1maWxsZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG5cbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29tbWVudC1jb250YWluZXIge1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4ubGliLWNvbXBvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/getting-started/getting-started.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/getting-started/getting-started.component.ts ***!
  \**************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let GettingStartedComponent = class GettingStartedComponent {
    constructor(titleService, snackBar) {
        this.titleService = titleService;
        this.snackBar = snackBar;
        this.index = 0;
        this.totalSteps = 2;
        this.isLaunched = false;
        this.fillerContent = Array(15);
        this.fixed = false;
        this.coverHeader = false;
        this.showHeader = false;
        this.showFooter = false;
        this.modeIndex = 0;
        this.ngVersion = `      _                      _                 ____ _     ___
                  / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                 / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
                / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
               /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                              |___/


              Angular CLI: 6.0.0
              Node: 8.11.3
              OS: darwin x64
              Angular: 6.0.6`;
        this.importBrowserAnimationsModule = `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [BrowserAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;
        this.importNoopAnimationsModule = `import {NoopAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [NoopAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;
        this.importMaterialThemeSCSS = `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`;
        this.customMaterialTheme = `@import '../node_modules/@angular/material/theming';
     // Plus imports for other components in your app
     // Include the common styles for Angular Material. We include this here so that you only
     // have to load a single css file for Angular Material in your app.
     // Be sure that you only ever include this mixin once!
     @include mat-core()
     // Define the palettes for your theme using the Material Design palettes available in palette.scss
     // (imported above). For each palette, you can optionally specify a default, lighter, and darker
     // hue.
     $candy-app-primary: mat-palette($mat-indigo);
     $candy-app-accent:  mat-palette($mat-pink, A200, A100, A400)
     // The warn palette is optional (defaults to red).
     $candy-app-warn:    mat-palette($mat-red)
     // Create the theme object (a Sass map containing all of the palettes).
     $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn)
     // Include theme styles for core and each component used in your app.
     // Alternatively, you can import and @include the theme mixins for each component
     // that you are using.
     @include angular-material-theme($candy-app-theme);
     `;
        this.stylesBeforeImportMDI = `"styles": [
        "styles.css"
      ],`;
        this.stylesAfterImportMDI = `"styles": [
        "styles.css",
        "node_modules/material-design-icons/iconfont/material-icons.css"
      ],`;
        this.materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;
        this.systemJSModuleImport = `map: {
  'ngx-auth-firebaseui': 'node_modules/ngx-auth-firebaseui/bundles/ngx-auth-firebaseui.umd.js',
  }`;
        this.importNgxAuthFirebaseUIModule = `import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';`;
        this.importNgxAuthFirebaseUIModuleInAppModule = `import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [NgxAuthFirebaseUIModule.forRoot({
                                                  apiKey: 'your-firebase-apiKey',
                                                  authDomain: 'your-firebase-authDomain',
                                                  databaseURL: 'your-firebase-databaseURL',
                                                  projectId: 'your-firebase-projectId',
                                                  storageBucket: 'your-firebase-storageBucket',
                                                  messagingSenderId: 'your-firebase-messagingSenderId'
                                              }),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;
        this.importNgxAuthFirebaseUIModuleInOtherModule = `import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [NgxAuthFirebaseUIModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;
        this.firebaseConfiguration = `{
                    apiKey: 'your-firebase-apiKey',
                    authDomain: 'your-firebase-authDomain',
                    databaseURL: 'your-firebase-databaseURL',
                    projectId: 'your-firebase-projectId',
                    storageBucket: 'your-firebase-storageBucket',
                    messagingSenderId: 'your-firebase-messagingSenderId'
                }`;
        this.copyAssetSnippet = `{
                      "glob": "**/*",
                      "input": "node_modules/ngx-auth-firebaseui/assets/",
                      "output": "./assets/"
                      }`;
        this.afterCopyingAssestSnippet = `"assets": [
                                  "assets",
                                  "favicon.ico",
                                  {
                                    "glob": "**/*",
                                    "input": "node_modules/ngx-auth-firebaseui/assets/",
                                    "output": "./assets/"
                                  }
                                ]`;
        this.exampleNgxAuthFirebaseUI = `<ngx-auth-firebaseui (onSuccess)="printUser($event)" (onError)="printError()"></ngx-auth-firebaseui>`;
    }
    get mode() {
        return ['side', 'over', 'push'][this.modeIndex];
    }
    get fixedTop() {
        return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0;
    }
    get fixedBottom() {
        return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0;
    }
    ngOnInit() {
        this.titleService.setTitle('Getting Started | ngx-auth-firebaseui');
    }
    showCopyMessage(content) {
        this.snackBar.open(`${content} copied`, 'OK', {
            duration: 3000
        });
    }
    next() {
        console.log('index before', this.index);
        this.index = this.index === this.totalSteps - 1 ? this.totalSteps - 1 : ++this.index;
        console.log('index after', this.index);
    }
};
GettingStartedComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GettingStartedComponent.prototype, "index", void 0);
GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getting-started',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/getting-started/getting-started.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], GettingStartedComponent);



/***/ }),

/***/ "./src/app/getting-started/getting-started.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.module.ts ***!
  \***********************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started.component */ "./src/app/getting-started/getting-started.component.ts");
/* harmony import */ var _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started-routing.module */ "./src/app/getting-started/getting-started-routing.module.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");















let GettingStartedModule = class GettingStartedModule {
};
GettingStartedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _getting_started_routing_module__WEBPACK_IMPORTED_MODULE_4__["GettingStartedRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_13__["AppSharedModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"],
            _shared__WEBPACK_IMPORTED_MODULE_13__["AppSharedModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"]
        ],
        declarations: [
            _getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"],
        ],
    })
], GettingStartedModule);



/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map