(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-features-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1>Features</h1>\n  </div>\n</div>\n\n<section>\n  <div class=\"container\">\n\n    <!--features-->\n    <mat-pages title=\"Features of ngx-auth-firebaseui\">\n\n      <!--1-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Sign Up\"></mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>New users are always welcome!</mat-card-title>\n          <mat-card-content fxLayoutAlign=\"center\" mat-card-image>\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"sign up with ngx-auth-firebaseui\">\n              <source\n                src=\"assets/tutorials/demo_register.mp4\"\n                type=\"video/mp4\">\n            </video>\n          </mat-card-content>\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--2-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Form validation\"></mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>\n            Display an appropriate error when validation fails!\n          </mat-card-title>\n          <mat-card-subtitle>\n            Every input form element will be validated!\n          </mat-card-subtitle>\n          <mat-card-content fxLayoutAlign=\"center\" mat-card-image>\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"sign up with ngx-auth-firebaseui\">\n              <source\n                src=\"assets/tutorials/demo_form_validation.mp4\"\n                type=\"video/mp4\">\n            </video>\n          </mat-card-content>\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--3-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Password Strength Meter\"></mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Users should provide a strong password</mat-card-title>\n          <mat-card-subtitle>when creating/registering a new account</mat-card-subtitle>\n          <mat-card-content fxLayoutAlign=\"center\" mat-card-image>\n            <video *ngIf=\"true\" controls autoplay loop\n                   aria-label=\"@angular-material-extensions/password-strength with ngx-auth-firebaseui\">\n              <source\n                src=\"assets/tutorials/demo_password_stength_mter.mp4\"\n                type=\"video/mp4\">\n            </video>\n          </mat-card-content>\n          <mat-card-footer>\n            <mat-card-title style=\"margin: 0 1.5rem 0 1.5rem\">For this feature, we are using\n              <a href=\"https://github.com/angular-material-extensions/password-strength\"\n                 target=\"_blank\"\n                 mat-button\n                 color=\"primary\">\n                @angular-material-extensions/password-strength</a>\n            </mat-card-title>\n\n            <video *ngIf=\"true\" controls autoplay loop aria-label=\"sign up with ngx-auth-firebaseui\">\n              <source\n                src=\"assets/tutorials/demo_ngx_material_password_strength.mp4\"\n                type=\"video/mp4\">\n            </video>\n          </mat-card-footer>\n          <mat-card-actions style=\"margin-top: 2rem\" fxLayoutAlign=\"space-around\">\n            <a href=\"https://github.com/anthonynahas/mat-password-strength\"\n               target=\"_blank\"\n               mat-raised-button>\n              Github</a>\n            <a href=\"https://anthonynahas.github.io/mat-password-strength\"\n               target=\"_blank\"\n               mat-raised-button\n               color=\"accent\">\n              Demo</a>\n            <a href=\"https://anthonynahas.github.io/mat-password-strength/doc/index.html\"\n               target=\"_blank\"\n               mat-raised-button\n               color=\"primary\">\n              Documentation</a>\n          </mat-card-actions>\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--4-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Sign in/up with your favorite provider\"></mat-page-outlook>\n        <mat-page-content>\n          <mat-card-title>Email/Password | Google | Facebook | Twitter | Github</mat-card-title>\n          <mat-card-subtitle>Authentication with phone number is on the road map!</mat-card-subtitle>\n          <mat-card-actions>\n            <span>Pick up your favorite authentication Provider!</span>\n            <a [routerLink]=\"['/examples']\"\n               target=\"_blank\"\n               mat-raised-button\n               color=\"primary\">\n              Check out the examples!\n            </a>\n          </mat-card-actions>\n          <ngx-auth-firebaseui></ngx-auth-firebaseui>\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--5-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Responsive\"></mat-page-outlook>\n        <mat-page-content>\n          <div style=\"margin: 1rem 0 2rem 0\">\n            <mat-card-title>Mobile View Port</mat-card-title>\n            <img mat-card-image src=\"assets/tutorials/demo_mobile.png\" alt=\"ngx-auth-firebaseui on mobile view\">\n          </div>\n          <div style=\"margin: 1rem 0 2rem 0\">\n            <mat-card-title>Tablet View Port</mat-card-title>\n            <img mat-card-image src=\"assets/tutorials/demo_tablet.png\" alt=\"ngx-auth-firebaseui on tablet view\">\n          </div>\n          <div style=\"margin: 1rem 0 2rem 0\">\n            <mat-card-title>Desktop View Port</mat-card-title>\n            <img mat-card-image src=\"assets/tutorials/demo_desktop.png\" alt=\"ngx-auth-firebaseui on desktop view\">\n          </div>\n        </mat-page-content>\n      </mat-page-loader>\n\n    </mat-pages>\n\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/features/features-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "./src/app/features/features.component.ts");




let FeaturesRoutingModule = class FeaturesRoutingModule {
};
FeaturesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"] }
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], FeaturesRoutingModule);



/***/ }),

/***/ "./src/app/features/features.component.scss":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-button {\n  white-space: normal !important;\n}\n\nvideo {\n  max-width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsImZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJmZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiIsIi5tYXQtYnV0dG9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturesComponent = class FeaturesComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./features.component.scss */ "./src/app/features/features.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FeaturesComponent);



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features-routing.module */ "./src/app/features/features-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");






let FeaturesModule = class FeaturesModule {
};
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



/***/ })

}]);
//# sourceMappingURL=features-features-module-es2015.js.map