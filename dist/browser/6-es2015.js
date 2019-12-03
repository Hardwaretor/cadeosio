(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plm/plm.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plm/plm.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>plm works!</p>\n");

/***/ }),

/***/ "./src/app/plm/plm-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/plm/plm-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PlmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlmRoutingModule", function() { return PlmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _plm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plm.component */ "./src/app/plm/plm.component.ts");




const routes = [{ path: '', component: _plm_component__WEBPACK_IMPORTED_MODULE_3__["PlmComponent"] }];
let PlmRoutingModule = class PlmRoutingModule {
};
PlmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PlmRoutingModule);



/***/ }),

/***/ "./src/app/plm/plm.component.scss":
/*!****************************************!*\
  !*** ./src/app/plm/plm.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsbS9wbG0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/plm/plm.component.ts":
/*!**************************************!*\
  !*** ./src/app/plm/plm.component.ts ***!
  \**************************************/
/*! exports provided: PlmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlmComponent", function() { return PlmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlmComponent = class PlmComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./plm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plm/plm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./plm.component.scss */ "./src/app/plm/plm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlmComponent);



/***/ }),

/***/ "./src/app/plm/plm.module.ts":
/*!***********************************!*\
  !*** ./src/app/plm/plm.module.ts ***!
  \***********************************/
/*! exports provided: PlmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlmModule", function() { return PlmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _plm_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plm-routing.module */ "./src/app/plm/plm-routing.module.ts");
/* harmony import */ var _plm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plm.component */ "./src/app/plm/plm.component.ts");





let PlmModule = class PlmModule {
};
PlmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_plm_component__WEBPACK_IMPORTED_MODULE_4__["PlmComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _plm_routing_module__WEBPACK_IMPORTED_MODULE_3__["PlmRoutingModule"]
        ]
    })
], PlmModule);



/***/ })

}]);
//# sourceMappingURL=6-es2015.js.map