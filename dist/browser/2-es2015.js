(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/campus/campus.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campus/campus.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>campus works!</p>\n");

/***/ }),

/***/ "./src/app/campus/campus-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/campus/campus-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CampusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusRoutingModule", function() { return CampusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _campus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campus.component */ "./src/app/campus/campus.component.ts");




const routes = [{ path: '', component: _campus_component__WEBPACK_IMPORTED_MODULE_3__["CampusComponent"] }];
let CampusRoutingModule = class CampusRoutingModule {
};
CampusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CampusRoutingModule);



/***/ }),

/***/ "./src/app/campus/campus.component.scss":
/*!**********************************************!*\
  !*** ./src/app/campus/campus.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXB1cy9jYW1wdXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/campus/campus.component.ts":
/*!********************************************!*\
  !*** ./src/app/campus/campus.component.ts ***!
  \********************************************/
/*! exports provided: CampusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusComponent", function() { return CampusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CampusComponent = class CampusComponent {
    constructor() { }
    ngOnInit() {
    }
};
CampusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./campus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/campus/campus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./campus.component.scss */ "./src/app/campus/campus.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CampusComponent);



/***/ }),

/***/ "./src/app/campus/campus.module.ts":
/*!*****************************************!*\
  !*** ./src/app/campus/campus.module.ts ***!
  \*****************************************/
/*! exports provided: CampusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusModule", function() { return CampusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _campus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campus-routing.module */ "./src/app/campus/campus-routing.module.ts");
/* harmony import */ var _campus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campus.component */ "./src/app/campus/campus.component.ts");





let CampusModule = class CampusModule {
};
CampusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_campus_component__WEBPACK_IMPORTED_MODULE_4__["CampusComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _campus_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampusRoutingModule"]
        ]
    })
], CampusModule);



/***/ })

}]);
//# sourceMappingURL=2-es2015.js.map