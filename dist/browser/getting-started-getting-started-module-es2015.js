(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1>Getting Started</h1>\n  </div>\n</div>\n\n<section class=\"getting-started\">\n  <div class=\"container\">\n\n    <mat-pages title=\"CADEOS.io\">\n      <!--1-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Setup Development Environment\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Please make sure that you have <a href=\"https://nodejs.org/en/\" mat-button\n                                                            color=\"primary\">NodeJS</a>\n            and <a href=\"https://www.npmjs.com/package/npm\"\n                   mat-button\n                   color=\"primary\">\n              npm</a>\n            running on your machine in order to be able to develop some wonderful apps.\n          </mat-card-title>\n          <mat-card>\n            <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n              <pre><code [highlight]=\"'$ node -v'\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"'node -v'\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage('node -v')\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </mat-card-content>\n            <mat-divider></mat-divider>\n          </mat-card>\n          <mat-card>\n            <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n              <pre><code [highlight]=\"'$ npm -v'\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"'node -v'\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage('npm -v')\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </mat-card-content>\n            <mat-divider></mat-divider>\n            <mat-card-footer fxLayoutAlign=\"center\" style=\"flex-wrap: wrap\">\n              <a href=\"https://nodejs.org/en/download/\" mat-button\n                 color=\"primary\"> If they are not already downloaded, please install Node.js and npm </a>\n            </mat-card-footer>\n          </mat-card>\n          <mat-card>\n            <mat-card-subtitle>\n              Check if <a href=\"https://cli.angular.io/\" mat-button\n                          color=\"primary\">angular cli </a> is already installed globally\n            </mat-card-subtitle>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                <pre><code [highlight]=\"'$ ng -v'\"></code></pre>\n                <button mat-icon-button\n                        ngxClipboard\n                        [cbContent]=\"'ng -v'\"\n                        matTooltip=\"copy\"\n                        (click)=\"showCopyMessage('ng -v')\">\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n                </button>\n              </div>\n              <p>If angular cli is installed on you machine, you should get something like this</p>\n\n              <pre><code [highlight]=\"ngVersion\"></code></pre>\n\n              <p>If not please run the following command to install angular cli globally in order to create an angular\n                project</p>\n\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                <pre><code [highlight]=\"'$ npm install -g @angular/cli'\"></code></pre>\n                <button mat-icon-button\n                        ngxClipboard\n                        [cbContent]=\"'npm install -g @angular/cli'\"\n                        matTooltip=\"copy\"\n                        (click)=\"showCopyMessage('npm install -g @angular/cli')\">\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n                </button>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </mat-page-content>\n      </mat-page-loader>\n\n\n      <!--2-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Setup Angular App\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title> Time to begin with Angular</mat-card-title>\n          <p>If you have already a setup angular project, you can skip this step, otherwise you can generate a project\n            via the angular cli by running the following</p>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code [highlight]=\"'$ ng new yourappname'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'ng new yourappname'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('ng new yourappname')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"generate new angular project\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fng_g_appname2.mp4?alt=media&token=d3e5b2d4-d806-44d9-a1ed-7a7b8a1c877f\"\n                type=\"video/mp4\">\n            </video>\n\n            <div class=\"comment-container\">\n              <p>waiting......</p>\n            </div>\n\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"Done with generating the project\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fng_g_appname_done2.mp4?alt=media&token=1f7591bf-e147-4dd4-91c2-23793ffeed6b\"\n                type=\"video/mp4\">\n            </video>\n\n            <div class=\"comment-container\">\n              <p> When the angular cli is done with generating the project, navigate to you your app\n                and check the project structure.</p>\n            </div>\n\n            <video *ngIf=\"true\" controls autoplay loop\n                   aria-label=\"go into the generated project and checkout the generated files\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fcd_angularapp.mp4?alt=media&token=830c3b21-ad94-405b-8b9f-d1ee4504685d\"\n                type=\"video/mp4\">\n            </video>\n          </div>\n        </mat-page-content>\n      </mat-page-loader>\n\n\n      <!--3-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Peer dependencies\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Animations + Material + CDK + FlexLayout + Firebase + Angularfire2</mat-card-title>\n          <div class=\"comment-container\">\n            <p><a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\"\n                  mat-button\n                  color=\"primary\">\n              ngx-auth-firebaseui\n            </a>\n              is built on the top of\n              <a href=\"https://www.npmjs.com/package/@angular/material\"\n                 mat-button\n                 color=\"primary\">\n                angular material\n              </a> and\n              <a href=\"https://www.npmjs.com/package/@angular/cdk\"\n                 mat-button\n                 color=\"primary\">\n                angular component development kit\n              </a> ! That's why we need to install them as peer dependencies to the ngx-auth-firebaseui module.\n            </p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code [highlight]=\"'$ npm i -s @angular/material @angular/cdk'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'npm i -s @angular/material @angular/cdk'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('npm i -s @angular/material @angular/cdk')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div fxLayoutAlign=\"center\">\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"install angular material and angular cdk with npm\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_material_cdk.mp4?alt=media&token=1cc60fb7-e347-4212-9f61-5b4ed527dd3e\"\n                type=\"video/mp4\">\n            </video>\n          </div>\n          <div class=\"comment-container\">\n            <p>\n              Furthermore, <a href=\"https://www.npmjs.com/package/@angular/animations\"\n                              mat-button\n                              color=\"primary\">\n              angular animations\n            </a> is required too to provide advanced transitions between the components.\n            </p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code [highlight]=\"'$ npm i -s @angular/animations'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'npm i -s @angular/animations'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('npm i -s @angular/animations')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div fxLayoutAlign=\"center\">\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"install angular animations with npm\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_animations.mp4?alt=media&token=c8fcac6a-7fd6-48ab-871b-785991eb2fdb\"\n                type=\"video/mp4\">\n            </video>\n          </div>\n          <div class=\"comment-container\">\n            <p>Now it's time to import the animations module.</p>\n          </div>\n          <mat-card>\n            <mat-card-content>\n              <pre><code [highlight]=\"importBrowserAnimationsModule\"></code></pre>\n            </mat-card-content>\n          </mat-card>\n          <mat-card-footer fxLayoutAlign=\"center\">\n            <a href=\"https://material.angular.io/guide/getting-started#step-2-animations\"\n               mat-button color=\"primary\">Learn more</a>\n          </mat-card-footer>\n\n          <!--<div fxLayoutAlign=\"center\">-->\n          <!--<video *ngIf=\"true\" controls autoplay loop aria-label=\"install angular animations with npm\">-->\n          <!--<source-->\n          <!--src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_animations.mp4?alt=media&token=c8fcac6a-7fd6-48ab-871b-785991eb2fdb\"-->\n          <!--type=\"video/mp4\">-->\n          <!--</video>-->\n          <!--</div>-->\n\n          <div class=\"comment-container\">\n            <p>Fire Fire Firebase!</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code [highlight]=\"'$ npm i -s firebase @angular/fire'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'npm i -s firebase @angular/fire'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('npm i -s firebase @angular/fire')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n\n        </mat-page-content>\n      </mat-page-loader>\n\n\n      <!--4-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Material Theme\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Styling and more...</mat-card-title>\n          <div class=\"comment-container\">\n            <p>In order to use angular material/ material design, we need include at least one theme.\n              To get started, you can just import one of the prebuilt material themes from the angular material module\n              in your style.css file.</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code [highlight]=\"importMaterialThemeSCSS\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"importMaterialThemeSCSS\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage(importMaterialThemeSCSS)\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div fxLayoutAlign=\"center\">\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of linking's material design themes\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fimport_theme.mp4?alt=media&token=5011fdd5-48c9-4f2d-8f36-61bdf78be460\"\n                type=\"video/mp4\">\n            </video>\n          </div>\n          <div class=\"comment-container\">\n            <p>Or create your own material theme and import it in the style.css file</p>\n          </div>\n          <div fxLayoutAlign=\"center\">\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of creating a custom material theme\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fimport_custom_theme.mp4?alt=media&token=f2995ca2-1bc6-4a1a-b8b6-6ce259ff26c6\"\n                type=\"video/mp4\">\n            </video>\n          </div>\n          <mat-card>\n            <mat-card-subtitle>Custom material theme</mat-card-subtitle>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                <pre><code [highlight]=\"customMaterialTheme\"></code></pre>\n                <button mat-icon-button\n                        ngxClipboard\n                        [cbContent]=\"customMaterialTheme\"\n                        matTooltip=\"copy\"\n                        (click)=\"showCopyMessage(customMaterialTheme)\">\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n                </button>\n              </div>\n            </mat-card-content>\n            <mat-card-footer fxLayoutAlign=\"center\">\n              <a href=\"https://material.angular.io/guide/theming\"\n                 target=\"_blank\"\n                 mat-button\n                 color=\"primary\">\n                <mat-icon>link</mat-icon>\n                Learn more about angular material themes</a>\n            </mat-card-footer>\n          </mat-card>\n        </mat-page-content>\n      </mat-page-loader>\n\n\n      <!--5-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Material Icons\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Linking the icons</mat-card-title>\n          <mat-card-content>\n            <div class=\"comment-container\">\n              <p>The easiest way to load the material design icons is to provide the\n                following link in your\n              <p>\n              <pre><code [highlight]=\"'index.html '\"></code></pre>\n              <p>file </p>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n              <pre><code [highlight]=\"materialIconsLink\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"materialIconsLink\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage(materialIconsLink)\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </div>\n            <div fxLayoutAlign=\"center\">\n              <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of linking material design icons\">\n                <source\n                  src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Flink_material_design_icons.mp4?alt=media&token=d3e7848b-6977-4044-909c-c75b701988a4\"\n                  type=\"video/mp4\">\n              </video>\n            </div>\n            <div class=\"comment-container\">\n              <p>Or, if you want to host the material design icons by yourself, please follow these two steps.</p>\n            </div>\n\n            <div class=\"comment-container\">\n              <p>First, install the <a href=\"https://www.npmjs.com/package/material-design-icons\"\n                                       mat-button color=\"primary\">material design icons' npm module</a></p>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n              <pre><code [highlight]=\"'$ npm i -s material-design-icons'\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"'npm i -s material-design-icons'\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage('npm i -s material-design-icons')\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </div>\n            <div class=\"comment-container\">\n              <p>After that, you need to update you\n              <p>\n              <pre><code [highlight]=\"'angular.json'\"></code></pre>\n              <p>files. Under the styles sections, add\n                the path of the material design icons in order to be imported to your distribution files\n                when you build your app. <i>See below</i></p>\n            </div>\n            <div class=\"comment-container\">\n              <p>First of all, copy the path of the material design icons</p>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code highlight\n                       [highlight]=\"'node_modules/material-design-icons/iconfont/material-icons.css'\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"'node_modules/material-design-icons/iconfont/material-icons.css'\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage('node_modules/material-design-icons/iconfont/material-icons.css')\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </div>\n            <div class=\"comment-container\">\n              <p>Adjust your angular.json file</p>\n            </div>\n            <mat-card-subtitle>Before</mat-card-subtitle>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code highlight\n                       [highlight]=\"stylesBeforeImportMDI\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"stylesBeforeImportMDI\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage(stylesBeforeImportMDI)\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </div>\n            <mat-card-subtitle>After</mat-card-subtitle>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code highlight\n                       [highlight]=\"stylesAfterImportMDI\"></code></pre>\n              <button mat-icon-button\n                      ngxClipboard\n                      [cbContent]=\"stylesAfterImportMDI\"\n                      matTooltip=\"copy\"\n                      (click)=\"showCopyMessage(stylesAfterImportMDI)\">\n                <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n              </button>\n            </div>\n            <div fxLayoutAlign=\"center\">\n              <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of selfhosting material design icons\">\n                <source\n                  src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fmaterial_design_icons_self_hosting.mp4?alt=media&token=8b444b0e-62b5-4fc4-b925-aa81cf2dff9e\"\n                  type=\"video/mp4\">\n              </video>\n            </div>\n            <div class=\"comment-container\">\n              <p>Great! You are done with the basics\n                <mat-icon color=\"accent\">done</mat-icon>\n              </p>\n            </div>\n          </mat-card-content>\n          <mat-card-footer fxLayoutAlign=\"center\">\n            <a href=\"https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons\"\n               target=\"_blank\"\n               mat-button\n               color=\"primary\">\n              <mat-icon>link</mat-icon>\n              Learn more about angular material icons</a>\n          </mat-card-footer>\n        </mat-page-content>\n      </mat-page-loader>\n\n\n      <!--6-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Installation\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Here we go\n            <mat-icon>flight_takeoff</mat-icon>\n          </mat-card-title>\n          <div class=\"comment-container\">\n            Open a new terminal and run the following command to get\n            <a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\" mat-button\n               color=\"primary\">ngx-auth-firebaseui</a>\n            from npm\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <pre><code highlight\n                       [highlight]=\"'$ npm i -s ngx-auth-firebaseui'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'npm i -s ngx-auth-firebaseui'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('npm i -s ngx-auth-firebaseui')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div fxLayoutAlign=\"center\">\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"video of installing ngx-auth-firebaseui via npm\">\n              <source\n                src=\"https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/tutorials%2Fnpm_i_ngx_auth_firebaseui.mp4?alt=media&token=8c17ba14-9a8c-4e40-80ac-df8388a5eaa5\"\n                type=\"video/mp4\">\n            </video>\n          </div>\n          <div class=\"comment-container\">\n            <p>Now you just need to import the library </p>\n          </div>\n          <mat-card>\n            <mat-card-title>SystemJS</mat-card-title>\n            <mat-card-subtitle>\n              Note:If you are using SystemJS, you should adjust your configuration to point to the UMD\n              bundle. In your systemjs config file, map needs to tell the System loader where to look for\n              ngx-auth-firebaseui\n            </mat-card-subtitle>\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"systemJSModuleImport\"></code></pre>\n                <button mat-icon-button\n                        ngxClipboard\n                        [cbContent]=\"systemJSModuleImport\"\n                        matTooltip=\"copy\"\n                        (click)=\"showCopyMessage(systemJSModuleImport)\">\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n                </button>\n              </div>\n            </mat-card-content>\n          </mat-card>\n          <div class=\"comment-container\">\n            <p>Once installed you need to import the main module:</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"importNgxAuthFirebaseUIModule\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"importNgxAuthFirebaseUIModule\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage(importNgxAuthFirebaseUIModule)\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>The only remaining part is to list the imported module in your application module. The exact method\n              will be slightly different for the root (top-level) module for which you should end up with the code\n              similar to (notice NgxMaterialPagesModule .forRoot()):\n\n              NB: please do not forget to import the angular animations module in your root component too!\n              (usally app.component.ts)</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"importNgxAuthFirebaseUIModuleInAppModule\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"importNgxAuthFirebaseUIModuleInAppModule\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage(importNgxAuthFirebaseUIModuleInAppModule)\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>Please do not forget to add your configuration to the module. The is absolutely required to link\n              your firebase project with</p>\n            <pre><code highlight\n                       [highlight]=\"'ngx-auth-firebaseui'\"></code></pre>\n            <p>See below again...</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"firebaseConfiguration\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"firebaseConfiguration\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage(firebaseConfiguration)\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>Other modules in your application can simply import NgxMaterialPagesModule:</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"importNgxAuthFirebaseUIModuleInOtherModule\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"importNgxAuthFirebaseUIModuleInOtherModule\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage(importNgxAuthFirebaseUIModuleInOtherModule)\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n        </mat-page-content>\n      </mat-page-loader>\n\n\n      <!--7-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Copy Asset to angular.json\"></mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>We need ngx-auth-firebaseui's assets</mat-card-title>\n\n          <mat-card>\n            <mat-card-title>Via Angular CLI</mat-card-title>\n            <mat-card-content>\n              <div class=\"comment-container\">\n                <p>First of all, open the following file</p>\n                <pre><code highlight\n                           [highlight]=\"'angular.json'\"></code></pre>\n                <p>after that, add the following snippet under the <strong>assets</strong> section</p>\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"copyAssetSnippet\"></code></pre>\n                  <button mat-icon-button\n                          ngxClipboard\n                          [cbContent]=\"copyAssetSnippet\"\n                          matTooltip=\"copy\"\n                          (click)=\"showCopyMessage(copyAssetSnippet)\">\n                    <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n                  </button>\n                </div>\n                <p>Now, the required images will be copied to the assets directory and they will be available for your\n                  app.\n                  The assets section should look</p>\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"afterCopyingAssestSnippet\"></code></pre>\n                <button mat-icon-button\n                        ngxClipboard\n                        [cbContent]=\"afterCopyingAssestSnippet\"\n                        matTooltip=\"copy\"\n                        (click)=\"showCopyMessage(afterCopyingAssestSnippet)\">\n                  <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n                </button>\n              </div>\n            </mat-card-content>\n          </mat-card>\n\n          <mat-card>\n            <mat-card-title>Without Angular CLI</mat-card-title>\n            <mat-card-content>\n              <div class=\"comment-container\">\n                <p>copy the assets directory into the root of your project, so that your app can get the required images\n                  for the UI. This is an example of requesting an image from the library Request\n                  URL:http://localhost:4200/assets/google.svg.\n                  Please make sur that the images will be hosted in the right place</p>\n              </div>\n            </mat-card-content>\n            <mat-card-content>\n\n            </mat-card-content>\n          </mat-card>\n\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--8-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Usage\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Library's components</mat-card-title>\n          <mat-card-subtitle>This library consists of 2 essential components.</mat-card-subtitle>\n\n          <mat-card class=\"lib-compontent\">\n            <mat-card-title>\n              <pre><code highlight\n                         [highlight]=\"'<ngx-auth-firebaseui></ngx-auth-firebaseui>'\"></code></pre>\n              <mat-card-subtitle>\n                ngx-auth-firebaseui the main container that is used for the authentication process\n              </mat-card-subtitle>\n            </mat-card-title>\n            <mat-card-content>\n              <ngx-auth-firebaseui></ngx-auth-firebaseui>\n            </mat-card-content>\n          </mat-card>\n\n          <mat-card>\n            <mat-card-title>\n              <pre><code highlight\n                         [highlight]=\"'<ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>'\"></code></pre>\n            </mat-card-title>\n            <mat-card-subtitle>\n              ngx-auth-firebaseui-user is used to display/edit the data of the current authenticated user.\n              Please note if you want to try out this component, you need to be authenticated. So if you sign in/up,\n              <strong>ngx-auth-firebaseui-user</strong> will be displayed.\n            </mat-card-subtitle>\n            <mat-card-content>\n              <ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>\n            </mat-card-content>\n          </mat-card>\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--8-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Run demo locally\">\n          <img style=\"width: 50px; height: 50px\" src=\"../../assets/icons/github.svg\">\n        </mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title-group><a href=\"https://github.com/AnthonyNahas/ngx-auth-firebaseui\"\n                                   mat-button\n                                   color=\"primary\">Clone the repo</a></mat-card-title-group>\n          <mat-card-title>Interested? Try it out on your machine\n          </mat-card-title>\n          <div class=\"comment-container\">\n            <p>Clone this repo by running this following command</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"'git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>install the dependencies</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"'$ npm i'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'npm i'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('npm i')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>Link ngx-auth-firebaseui</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"'$ gulp link'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'gulp link'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('gulp link')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>navigate to the demo directory</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"'$ cd demo'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'cd demo'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('cd demo')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>install the dependencies</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"'$ npm i'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'npm i'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('npm i')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>start the app</p>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                 <pre><code highlight\n                            [highlight]=\"'$ ng serve --open'\"></code></pre>\n            <button mat-icon-button\n                    ngxClipboard\n                    [cbContent]=\"'ng serve --open'\"\n                    matTooltip=\"copy\"\n                    (click)=\"showCopyMessage('ng serve --open')\">\n              <mat-icon aria-label=\"copy content\" class=\"mat-18\">content_copy</mat-icon>\n            </button>\n          </div>\n          <div class=\"comment-container\">\n            <p>the app is now hosted on http://localhost:4200/</p>\n          </div>\n        </mat-page-content>\n      </mat-page-loader>\n    </mat-pages>\n\n  </div>\n\n</section>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".getting-started {\n  margin-top: 1rem;\n}\n\n.main-container {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n\n.demo-sidenav-area {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-sidenav-area .mat-toolbar {\n  flex: 0;\n}\n\n.demo-sidenav-area .mat-sidenav-container {\n  flex: 1;\n}\n\n.demo-sidenav-area .demo-sidenav-content {\n  padding: 32px;\n}\n\n.demo-sidenav-area .demo-filler-content {\n  padding: 60px;\n}\n\nvideo {\n  max-width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.comment-container {\n  margin: 1rem;\n}\n\n.mat-button {\n  white-space: normal !important;\n}\n\n.lib-compontent {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUVFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxjQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0RGOztBREdFO0VBQ0UsT0FBQTtBQ0RKOztBRElFO0VBQ0UsT0FBQTtBQ0ZKOztBREtFO0VBQ0UsYUFBQTtBQ0hKOztBRE1FO0VBQ0UsYUFBQTtBQ0pKOztBRFFBO0VBQ0UsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsOEJBQUE7QUNMRjs7QURZQTtFQUNFLG1CQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldHRpbmctc3RhcnRlZCB7XG4gIG1hcmdpbi10b3A6IDEuMHJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLy9wYWRkaW5nOiA0OHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRlbW8tc2lkZW5hdi1hcmVhIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBmbGV4OiAwO1xuICB9XG5cbiAgLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5kZW1vLXNpZGVuYXYtY29udGVudCB7XG4gICAgcGFkZGluZzogMzJweDtcbiAgfVxuXG4gIC5kZW1vLWZpbGxlci1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICB9XG59XG5cbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29tbWVudC1jb250YWluZXIge1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4vLzo6bmctZGVlcCBuZ3gtYXV0aC1maXJlYmFzZXVpIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XG4vLyAgZGlzcGxheTogZmxleDtcbi8vfVxuXG4ubGliLWNvbXBvbnRlbnR7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4iLCIuZ2V0dGluZy1zdGFydGVkIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRlbW8tc2lkZW5hdi1hcmVhIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGVtby1zaWRlbmF2LWFyZWEgLm1hdC10b29sYmFyIHtcbiAgZmxleDogMDtcbn1cbi5kZW1vLXNpZGVuYXYtYXJlYSAubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbn1cbi5kZW1vLXNpZGVuYXYtYXJlYSAuZGVtby1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4O1xufVxuLmRlbW8tc2lkZW5hdi1hcmVhIC5kZW1vLWZpbGxlci1jb250ZW50IHtcbiAgcGFkZGluZzogNjBweDtcbn1cblxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb21tZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLm1hdC1idXR0b24ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5saWItY29tcG9udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il19 */");

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
//# sourceMappingURL=getting-started-getting-started-module-es2015.js.map