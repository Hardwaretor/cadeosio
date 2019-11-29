(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1>Features</h1>\r\n  </div>\r\n</div>\r\n\r\n<section>\r\n  <div class=\"container\">\r\n\r\n    <!--features-->\r\n    <mat-pages title=\"Features of ngx-auth-firebaseui\">\r\n\r\n      <!--1-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Sign Up\"></mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>New users are always welcome!</mat-card-title>\r\n          <mat-card-content fxLayoutAlign=\"center\" mat-card-image>\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"sign up with ngx-auth-firebaseui\">\r\n              <source\r\n                src=\"assets/tutorials/demo_register.mp4\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </mat-card-content>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--2-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Form validation\"></mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>\r\n            Display an appropriate error when validation fails!\r\n          </mat-card-title>\r\n          <mat-card-subtitle>\r\n            Every input form element will be validated!\r\n          </mat-card-subtitle>\r\n          <mat-card-content fxLayoutAlign=\"center\" mat-card-image>\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"sign up with ngx-auth-firebaseui\">\r\n              <source\r\n                src=\"assets/tutorials/demo_form_validation.mp4\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </mat-card-content>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--3-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Password Strength Meter\"></mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Users should provide a strong password</mat-card-title>\r\n          <mat-card-subtitle>when creating/registering a new account</mat-card-subtitle>\r\n          <mat-card-content fxLayoutAlign=\"center\" mat-card-image>\r\n            <video *ngIf=\"true\" controls autoplay loop\r\n                   aria-label=\"@angular-material-extensions/password-strength with ngx-auth-firebaseui\">\r\n              <source\r\n                src=\"assets/tutorials/demo_password_stength_mter.mp4\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </mat-card-content>\r\n          <mat-card-footer>\r\n            <mat-card-title style=\"margin: 0 1.5rem 0 1.5rem\">For this feature, we are using\r\n              <a href=\"https://github.com/angular-material-extensions/password-strength\"\r\n                 target=\"_blank\"\r\n                 mat-button\r\n                 color=\"primary\">\r\n                @angular-material-extensions/password-strength</a>\r\n            </mat-card-title>\r\n\r\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"sign up with ngx-auth-firebaseui\">\r\n              <source\r\n                src=\"assets/tutorials/demo_ngx_material_password_strength.mp4\"\r\n                type=\"video/mp4\">\r\n            </video>\r\n          </mat-card-footer>\r\n          <mat-card-actions style=\"margin-top: 2rem\" fxLayoutAlign=\"space-around\">\r\n            <a href=\"https://github.com/anthonynahas/mat-password-strength\"\r\n               target=\"_blank\"\r\n               mat-raised-button>\r\n              Github</a>\r\n            <a href=\"https://anthonynahas.github.io/mat-password-strength\"\r\n               target=\"_blank\"\r\n               mat-raised-button\r\n               color=\"accent\">\r\n              Demo</a>\r\n            <a href=\"https://anthonynahas.github.io/mat-password-strength/doc/index.html\"\r\n               target=\"_blank\"\r\n               mat-raised-button\r\n               color=\"primary\">\r\n              Documentation</a>\r\n          </mat-card-actions>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--4-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Sign in/up with your favorite provider\"></mat-page-outlook>\r\n        <mat-page-content>\r\n          <mat-card-title>Email/Password | Google | Facebook | Twitter | Github</mat-card-title>\r\n          <mat-card-subtitle>Authentication with phone number is on the road map!</mat-card-subtitle>\r\n          <mat-card-actions>\r\n            <span>Pick up your favorite authentication Provider!</span>\r\n            <a [routerLink]=\"['/examples']\"\r\n               target=\"_blank\"\r\n               mat-raised-button\r\n               color=\"primary\">\r\n              Check out the examples!\r\n            </a>\r\n          </mat-card-actions>\r\n          <ngx-auth-firebaseui></ngx-auth-firebaseui>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--5-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Responsive\"></mat-page-outlook>\r\n        <mat-page-content>\r\n          <div style=\"margin: 1rem 0 2rem 0\">\r\n            <mat-card-title>Mobile View Port</mat-card-title>\r\n            <img mat-card-image src=\"assets/tutorials/demo_mobile.png\" alt=\"ngx-auth-firebaseui on mobile view\">\r\n          </div>\r\n          <div style=\"margin: 1rem 0 2rem 0\">\r\n            <mat-card-title>Tablet View Port</mat-card-title>\r\n            <img mat-card-image src=\"assets/tutorials/demo_tablet.png\" alt=\"ngx-auth-firebaseui on tablet view\">\r\n          </div>\r\n          <div style=\"margin: 1rem 0 2rem 0\">\r\n            <mat-card-title>Desktop View Port</mat-card-title>\r\n            <img mat-card-image src=\"assets/tutorials/demo_desktop.png\" alt=\"ngx-auth-firebaseui on desktop view\">\r\n          </div>\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n    </mat-pages>\r\n\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./src/app/features/features-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/features/features-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: FeaturesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function () { return FeaturesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "./src/app/features/features.component.ts");
            var FeaturesRoutingModule = /** @class */ (function () {
                function FeaturesRoutingModule() {
                }
                return FeaturesRoutingModule;
            }());
            FeaturesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: '', component: _features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], FeaturesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/features/features.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/features/features.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-button {\n  white-space: normal !important;\n}\n\nvideo {\n  max-width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvQzpcXFVzZXJzXFxnZ2FsaW5kMVxcY2FkZW9zaW8vc3JjXFxhcHBcXGZlYXR1cmVzXFxmZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbiB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIiwiLm1hdC1idXR0b24ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/features/features.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/features/features.component.ts ***!
          \************************************************/
        /*! exports provided: FeaturesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () { return FeaturesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FeaturesComponent = /** @class */ (function () {
                function FeaturesComponent() {
                }
                FeaturesComponent.prototype.ngOnInit = function () {
                };
                return FeaturesComponent;
            }());
            FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-features',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./features.component.scss */ "./src/app/features/features.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FeaturesComponent);
            /***/ 
        }),
        /***/ "./src/app/features/features.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/features/features.module.ts ***!
          \*********************************************/
        /*! exports provided: FeaturesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function () { return FeaturesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "./src/app/features/features.component.ts");
            /* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features-routing.module */ "./src/app/features/features-routing.module.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            var FeaturesModule = /** @class */ (function () {
                function FeaturesModule() {
                }
                return FeaturesModule;
            }());
            FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _features_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesRoutingModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"]
                    ],
                    declarations: [_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"]]
                })
            ], FeaturesModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=2-es2015.js.map
//# sourceMappingURL=2-es5.js.map
//# sourceMappingURL=2-es5.js.map