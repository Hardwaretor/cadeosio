(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exchanges-exchanges-module"],{

/***/ "./src/app/exchanges/exchanges-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/exchanges/exchanges-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ExchangesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesRoutingModule", function() { return ExchangesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _exchanges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchanges.component */ "./src/app/exchanges/exchanges.component.ts");




let ExchangesRoutingModule = class ExchangesRoutingModule {
};
ExchangesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'exchanges', component: _exchanges_component__WEBPACK_IMPORTED_MODULE_3__["ExchangesComponent"] }
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ExchangesRoutingModule);



/***/ }),

/***/ "./src/app/exchanges/exchanges.module.ts":
/*!***********************************************!*\
  !*** ./src/app/exchanges/exchanges.module.ts ***!
  \***********************************************/
/*! exports provided: ExchangesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesModule", function() { return ExchangesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _exchanges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchanges.component */ "./src/app/exchanges/exchanges.component.ts");
/* harmony import */ var _exchanges_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchanges-routing.module */ "./src/app/exchanges/exchanges-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");






let ExchangesModule = class ExchangesModule {
};
ExchangesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _exchanges_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExchangesRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"]
        ],
        declarations: [_exchanges_component__WEBPACK_IMPORTED_MODULE_3__["ExchangesComponent"]]
    })
], ExchangesModule);



/***/ })

}]);
//# sourceMappingURL=exchanges-exchanges-module-es2015.js.map