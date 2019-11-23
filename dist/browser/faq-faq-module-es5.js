(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1>Providers: Google, Facebook, Twitter, Github, Microsoft and Yahoo</h1>\n  </div>\n</div>\n\n<ngx-auth-firebaseui-providers class=\"mb-2\"></ngx-auth-firebaseui-providers>\n<ngx-auth-firebaseui-providers class=\"mb-2\" [theme]=\"themes.CLASSIC\"></ngx-auth-firebaseui-providers>\n<ngx-auth-firebaseui-providers class=\"mb-2\" [theme]=\"themes.STROKED\"></ngx-auth-firebaseui-providers>\n<ngx-auth-firebaseui-providers class=\"mb-2\" [theme]=\"themes.RAISED\"></ngx-auth-firebaseui-providers>\n<ngx-auth-firebaseui-providers class=\"mb-2\" [theme]=\"themes.FAB\"></ngx-auth-firebaseui-providers>\n<ngx-auth-firebaseui-providers class=\"mb-2\" [theme]=\"themes.MINI_FAB\"></ngx-auth-firebaseui-providers>\n");
            /***/ 
        }),
        /***/ "./src/app/faq/faq-routing.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/faq/faq-routing.module.ts ***!
          \*******************************************/
        /*! exports provided: FaqRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqRoutingModule", function () { return FaqRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");
            var FaqRoutingModule = /** @class */ (function () {
                function FaqRoutingModule() {
                }
                return FaqRoutingModule;
            }());
            FaqRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: '', component: _faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], FaqRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/faq/faq.component.scss": 
        /*!****************************************!*\
          !*** ./src/app/faq/faq.component.scss ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/faq/faq.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/faq/faq.component.ts ***!
          \**************************************/
        /*! exports provided: FaqComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function () { return FaqComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            var FaqComponent = /** @class */ (function () {
                function FaqComponent() {
                    this.themes = ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_2__["Theme"];
                }
                FaqComponent.prototype.ngOnInit = function () {
                };
                return FaqComponent;
            }());
            FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-faq',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.component.scss */ "./src/app/faq/faq.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FaqComponent);
            /***/ 
        }),
        /***/ "./src/app/faq/faq.module.ts": 
        /*!***********************************!*\
          !*** ./src/app/faq/faq.module.ts ***!
          \***********************************/
        /*! exports provided: FaqModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function () { return FaqModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/faq/faq-routing.module.ts");
            var FaqModule = /** @class */ (function () {
                function FaqModule() {
                }
                return FaqModule;
            }());
            FaqModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqRoutingModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__["NgxAuthFirebaseUIModule"]
                    ],
                    declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]]
                })
            ], FaqModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=faq-faq-module-es2015.js.map
//# sourceMappingURL=faq-faq-module-es5.js.map
//# sourceMappingURL=faq-faq-module-es5.js.map