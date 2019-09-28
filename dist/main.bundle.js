webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'CADEOS.io Wallet';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */] && typeof ga === "function") {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared_page_page_component__ = __webpack_require__("../../../../../src/app/components/shared/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_page_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/shared/page/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shared_page_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/shared/page/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_page_loading_loading_component__ = __webpack_require__("../../../../../src/app/components/shared/page/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_prettyjson__ = __webpack_require__("../../../../angular2-prettyjson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_transfer_transfer_component__ = __webpack_require__("../../../../../src/app/components/transfer/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_actions_actions_component__ = __webpack_require__("../../../../../src/app/components/actions/actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_currencies_currencies_component__ = __webpack_require__("../../../../../src/app/components/currencies/currencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_scatter_service__ = __webpack_require__("../../../../../src/app/services/scatter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cadeosio_cadeosio_component__ = __webpack_require__("../../../../../src/app/cadeosio/cadeosio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'transfer', component: __WEBPACK_IMPORTED_MODULE_17__components_transfer_transfer_component__["a" /* TransferComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'actions', component: __WEBPACK_IMPORTED_MODULE_18__components_actions_actions_component__["a" /* ActionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'currencies', component: __WEBPACK_IMPORTED_MODULE_19__components_currencies_currencies_component__["a" /* CurrenciesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shared_page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_shared_page_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_shared_page_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_shared_page_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_transfer_transfer_component__["a" /* TransferComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_actions_actions_component__["a" /* ActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_currencies_currencies_component__["a" /* CurrenciesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__cadeosio_cadeosio_component__["a" /* CadeosioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_prettyjson__["a" /* PrettyJsonModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_webstorage__["b" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_21__services_scatter_service__["a" /* ScatterService */],
                __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__angular_common__["e" /* JsonPipe */], useClass: __WEBPACK_IMPORTED_MODULE_12_angular2_prettyjson__["b" /* SafeJsonPipe */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cadeosio/cadeosio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadeosio/cadeosio.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<IMG STYLE=\"position:absolute; TOP:5px; LEFT:5px; WIDTH:150px; HEIGHT:150px\" SRC=\"assets/cadeoslogo.png\">\n\n  <h1>CADEOS.io</h1>"

/***/ }),

/***/ "../../../../../src/app/cadeosio/cadeosio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadeosioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadeosioComponent = /** @class */ (function () {
    function CadeosioComponent() {
    }
    CadeosioComponent.prototype.ngOnInit = function () {
    };
    CadeosioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cadeosio',
            template: __webpack_require__("../../../../../src/app/cadeosio/cadeosio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadeosio/cadeosio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CadeosioComponent);
    return CadeosioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/actions/actions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/actions/actions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page>\n  <div id=\"page-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 class=\"page-header\">Actions</h1>\n      </div>\n      <!-- /.col-lg-12 -->\n    </div>\n\n    <div class=\"row\">\n      <!-- /.col-lg-12 -->\n      <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            Actions\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body\">\n            Actions\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n      <!-- /.col-lg-6 -->\n    </div>\n\n    <!-- /.row -->\n  </div>\n  <!-- /#page-wrapper -->\n</app-page>\n"

/***/ }),

/***/ "../../../../../src/app/components/actions/actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__("../../../../../src/app/components/actions/actions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/actions/actions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/currencies/currencies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/currencies/currencies.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page>\n  <div id=\"page-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 class=\"page-header\">Currencies</h1>\n      </div>\n      <!-- /.col-lg-12 -->\n    </div>\n\n    <div class=\"row\">\n      <!-- /.col-lg-12 -->\n      <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            Currencies\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body\">\n            Currencies\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n      <!-- /.col-lg-6 -->\n    </div>\n\n    <!-- /.row -->\n  </div>\n  <!-- /#page-wrapper -->\n</app-page>\n"

/***/ }),

/***/ "../../../../../src/app/components/currencies/currencies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrenciesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrenciesComponent = /** @class */ (function () {
    function CurrenciesComponent() {
    }
    CurrenciesComponent.prototype.ngOnInit = function () {
    };
    CurrenciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-currencies',
            template: __webpack_require__("../../../../../src/app/components/currencies/currencies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/currencies/currencies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrenciesComponent);
    return CurrenciesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo-container {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n    height: 350px;\n    border: 0px solid rgb(228, 175, 238);\n}\n\n.demo-placeholder {\n    width: 100%;\n    height: 100%;\n    font-size: 12px;\n    line-height: 1.2em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page>\n\t<div id=\"page-wrapper\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1 class=\"page-header\">{{username}}</h1>\n\t\t\t</div>\n\t\t\t<!-- /.col-lg-12 -->\n\t\t</div>\n\n\t\t<!--\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\tBalance\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"demo-container\">\n\t\t\t\t\t\t\t<div id=\"placeholder\" class=\"demo-placeholder\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\n\n\n\t\t<div class=\"row\">\n\t\t\t<!-- /.col-lg-12 -->\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\tHistory\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.panel-heading -->\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<app-loading *ngIf=\"!actions\"></app-loading>\n\t\t\t\t\t\t<div *ngIf=\"actions\" class=\"table-responsive\">\n\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Account</th>\n\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t<th>Tx</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let action of actions\">\n\t\t\t\t\t\t\t\t\t<td>{{action.account}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{action.name}}</td>\n\t\t\t\t\t\t\t\t\t<!-- <td>\n\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"message.data.from !== username\" class=\"fa fa-long-arrow-right fa-fw\" style=\"color: green\"></i>\n\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"message.data.from === username\" class=\"fa fa-long-arrow-right fa-fw\" style=\"color: red\"></i>\n\t\t\t\t\t\t\t\t\t</td> -->\n\t\t\t\t\t\t\t\t\t<td>{{action.transaction|slice:0:32}}...</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.table-responsive -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.panel-body -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /.panel -->\n\t\t\t</div>\n\t\t\t<!-- /.col-lg-6 -->\n\t\t</div>\n\n\t\t<!-- /.row -->\n\t</div>\n\t<!-- /#page-wrapper -->\n</app-page>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scatter_service__ = __webpack_require__("../../../../../src/app/services/scatter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, scatterService) {
        this.http = http;
        this.scatterService = scatterService;
        this.actions = null;
        this.stats = null;
        this.groups = null;
        this.handler = 'eos';
        this.alive = true;
        this.username = this.scatterService.identity.accounts[0].name;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 10000)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/accounts/' + _this.username + '/actions?page=1').subscribe(function (data) {
                _this.actions = data;
                console.log(_this.actions);
                /*
                          this.http.get(environment.apiUrl + '/accounts?name=' + this.username).subscribe(accounts => {
                            this.plot(this.messages, accounts[0]);
                          });
                          console.log(this.messages); */
            });
        });
        /*
            this.http.get(environment.apiUrl + '/wallet/messages/groups?scope=' + this.username).subscribe(data => {
              this.groups = [];
              for (let group of data[1]) {
                this.groups.push(group);
              }
              console.log(this.groups);
            }); */
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DashboardComponent.prototype.plot = function (messages, account) {
        var current_balance = parseInt(account.eos_balance.slice(0, -4).replace('.', ''));
        var days = [];
        days = [[1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636], [1196895600000, 3575], [1196982000000, 2736], [1197068400000, 1086], [1197154800000, 676], [1197241200000, 1205], [1197327600000, 906], [1197414000000, 710], [1197500400000, 639], [1197586800000, 540], [1197673200000, 435], [1197759600000, 301], [1197846000000, 575], [1197932400000, 481], [1198018800000, 591], [1198105200000, 608], [1198191600000, 459], [1198278000000, 234], [1198364400000, 1352], [1198450800000, 686], [1198537200000, 279], [1198623600000, 449], [1198710000000, 468], [1198796400000, 392], [1198882800000, 282], [1198969200000, 208], [1199055600000, 229], [1199142000000, 177], [1199228400000, 374], [1199314800000, 436], [1199401200000, 404], [1199487600000, 253], [1199574000000, 218], [1199660400000, 476], [1199746800000, 462], [1199833200000, 448], [1199919600000, 442], [1200006000000, 403], [1200092400000, 204], [1200178800000, 194], [1200265200000, 327], [1200351600000, 374], [1200438000000, 507], [1200524400000, 546], [1200610800000, 482], [1200697200000, 283], [1200783600000, 221], [1200870000000, 483], [1200956400000, 523], [1201042800000, 528], [1201129200000, 483], [1201215600000, 452], [1201302000000, 270], [1201388400000, 222], [1201474800000, 439], [1201561200000, 559], [1201647600000, 521], [1201734000000, 477], [1201820400000, 442], [1201906800000, 252], [1201993200000, 236], [1202079600000, 525], [1202166000000, 477], [1202252400000, 386], [1202338800000, 409], [1202425200000, 408], [1202511600000, 237], [1202598000000, 193], [1202684400000, 357], [1202770800000, 414], [1202857200000, 393], [1202943600000, 353], [1203030000000, 364], [1203116400000, 215], [1203202800000, 214], [1203289200000, 356], [1203375600000, 399], [1203462000000, 334], [1203548400000, 348], [1203634800000, 243], [1203721200000, 126], [1203807600000, 157], [1203894000000, 288]];
        /*
        for (let msg of messages) {
          current_balance = (msg.data.from === this.username) ? current_balance - msg.data.amount : current_balance + msg.data.amount;
          days.push([msg.createdAt.sec, current_balance]);
        }*/
        var options = {
            xaxis: {
                mode: "time"
            }
        };
        $.plot("#placeholder", [days], options);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__services_scatter_service__["a" /* ScatterService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4 col-md-offset-4\">\n\t\t\t<div class=\"login-panel panel panel-default\">\n\t\t\t\t<div align=\"center\" style=\"margin: 5px\"><img src=\"/assets/cadeoslogo.png\" width=\"200\" height=\"200\" /></div>\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h1 class=\"panel-title\" align=\"center\">CADEOS.io WALLET</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t<button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block \">LOGIN WITH SCATTER</button>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-primary btn-block \">LOGIN WITH MEET.one</button>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-primary btn-block \">LOGIN WITH LYNX</button>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-default btn-block disabled\">Create Wallet</button>\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"unlockScatter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Unlock Scatter</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tYou need to have Scatter installed and unlocked\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_scatter_service__ = __webpack_require__("../../../../../src/app/services/scatter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, renderer, scatterService) {
        var _this = this;
        this.router = router;
        this.renderer = renderer;
        this.scatterService = scatterService;
        renderer.listen('document', 'scatterLoaded', function () {
            _this.scatterService.load();
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.isLogged) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.login = function () {
        var that = this;
        this.scatterService.login(function () {
            that.isLogged = true;
            that.router.navigate(['/']);
        }, function (error) {
            $("#unlockScatter").modal();
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "isLogged", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_3__services_scatter_service__["a" /* ScatterService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page>\n  <div id=\"page-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h1 class=\"page-header\">Settings</h1>\n      </div>\n      <!-- /.col-lg-12 -->\n    </div>\n\n    <div class=\"row\">\n      <!-- /.col-lg-12 -->\n      <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            Settings\n          </div>\n          <!-- /.panel-heading -->\n          <div class=\"panel-body\">\n            Settings\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n      </div>\n      <!-- /.col-lg-6 -->\n    </div>\n\n    <!-- /.row -->\n  </div>\n  <!-- /#page-wrapper -->\n</app-page>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/page/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animationload {\n    position: relative;\n    z-index: 100;\n    display: block;\n    min-height: 150px;\n}\n\n.osahanloading {\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading;\n            animation: 1.5s linear 0s normal none infinite running osahanloading;\n    background: #fed37f none repeat scroll 0 0;\n    border-radius: 50px;\n    height: 50px;\n    left: 50%;\n    margin-left: -25px;\n    margin-top: -25px;\n    position: absolute;\n    top: 50%;\n    width: 50px;\n}\n\n.osahanloading::after {\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading_after;\n            animation: 1.5s linear 0s normal none infinite running osahanloading_after;\n    border-color: #85d6de transparent;\n    border-radius: 80px;\n    border-style: solid;\n    border-width: 10px;\n    content: \"\";\n    height: 80px;\n    left: -15px;\n    position: absolute;\n    top: -15px;\n    width: 80px;\n}\n\n@-webkit-keyframes osahanloading {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50% {\n        background: #85d6de none repeat scroll 0 0;\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes osahanloading {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50% {\n        background: #85d6de none repeat scroll 0 0;\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/page/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animationload\">\n\t<div class=\"osahanloading\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/page/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/components/shared/page/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/page/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/page/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand img {\n    width: 30px;\n    display: inline;\n    margin-top: -5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/page/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\n\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t<span class=\"icon-bar\"></span>\n\t\t<span class=\"icon-bar\"></span>\n\t\t<span class=\"icon-bar\"></span>\n\t</button>\n\t<a class=\"navbar-brand\" routerLink=\"/\"><img src=\"/assets/cadeoslogo.png\" />CADEOS.io WALLET</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/page/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/shared/page/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/page/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/page/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n\t\t<app-navbar></app-navbar>\n\t\t<app-sidebar></app-sidebar>\n\t</nav>\n\t<ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scatter_service__ = __webpack_require__("../../../../../src/app/services/scatter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageComponent = /** @class */ (function () {
    function PageComponent(renderer, scatterService) {
        var _this = this;
        this.renderer = renderer;
        this.scatterService = scatterService;
        renderer.listen('document', 'scatterLoaded', function () {
            _this.scatterService.load();
        });
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page',
            template: __webpack_require__("../../../../../src/app/components/shared/page/page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__services_scatter_service__["a" /* ScatterService */]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/page/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/page/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default sidebar\" role=\"navigation\">\n\t<div class=\"sidebar-nav navbar-collapse\">\n\t\t<ul class=\"nav\" id=\"side-menu\">\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/transfer\" routerLinkActive=\"active\"><i class=\"fa fa-exchange fa-fw\"></i> Transfer</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/currencies\" routerLinkActive=\"active\"><i class=\"fa fa-money fa-fw\"></i> Currencies</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/actions\" routerLinkActive=\"active\"><i class=\"fa fa-files-o fa-fw\"></i> Actions</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/settings\" routerLinkActive=\"active\"><i class=\"fa fa-cogs fa-fw\"></i> Settings</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/login\" (click)=\"logout()\" routerLinkActive=\"active\"><i class=\"fa fa-lock fa-fw\"></i> Logout</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<!-- /.sidebar-collapse -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/page/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scatter_service__ = __webpack_require__("../../../../../src/app/services/scatter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(scatterService) {
        this.scatterService = scatterService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logout = function () {
        this.scatterService.logout();
        this.isLogged = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "isLogged", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/shared/page/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/page/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_scatter_service__["a" /* ScatterService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/transfer/transfer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/transfer/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page>\n\t<div id=\"page-wrapper\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1 class=\"page-header\">Transfer</h1>\n\t\t\t</div>\n\t\t\t<!-- /.col-lg-12 -->\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<!-- /.col-lg-12 -->\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\tTransfer\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.panel-heading -->\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<form (submit)=\"transfer(to, amount, memo)\">\n\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">@</span>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"to\" [(ngModel)]=\"to\" name=\"to\" required placeholder=\"To\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">EOS</span>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"amount\" name=\"amount\" required placeholder=\"amount\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">Message</span>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"\" [(ngModel)]=\"memo\" name=\"memo\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-success btn-block\">Transfer</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.panel-body -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /.panel -->\n\t\t\t</div>\n\t\t\t<!-- /.col-lg-6 -->\n\t\t</div>\n\n\t\t<!-- /.row -->\n\t</div>\n\t<!-- /#page-wrapper -->\n\n\t<div class=\"modal fade\" id=\"errorTransfer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">Error in transfer</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\tUnable to send transfer\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</app-page>\n"

/***/ }),

/***/ "../../../../../src/app/components/transfer/transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scatter_service__ = __webpack_require__("../../../../../src/app/services/scatter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransferComponent = /** @class */ (function () {
    function TransferComponent(scatterService) {
        this.scatterService = scatterService;
    }
    TransferComponent.prototype.ngOnInit = function () {
        var that = this;
        var options = {
            url: function (phrase) {
                return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/accounts/name?name=' + phrase;
            },
            getValue: "name",
            list: {
                onSelectItemEvent: function () {
                    that.to = $("#to").getSelectedItemData().name;
                }
            }
        };
        //$("#to").easyAutocomplete(options);
    };
    TransferComponent.prototype.transfer = function (to, amount, memo) {
        this.scatterService.transfer(to, amount, memo, function (transaction) {
            console.log(transaction);
        }, function (error) {
            $("#errorTransfer").modal();
            console.log(error);
        });
    };
    TransferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__("../../../../../src/app/components/transfer/transfer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/transfer/transfer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_scatter_service__["a" /* ScatterService */]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.isLogged) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", Boolean)
    ], AuthGuard.prototype, "isLogged", void 0);
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/scatter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eosjs__ = __webpack_require__("../../../../eosjs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eosjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_eosjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__ = __webpack_require__("../../../../ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScatterService = /** @class */ (function () {
    function ScatterService() {
    }
    ScatterService.prototype.load = function () {
        console.log(this.identity);
        this.scatter = window.scatter;
        if (this.identity) {
            this.scatter.useIdentity(this.identity.hash);
        }
        this.network = {
            blockchain: 'eos',
            host: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].eosHost,
            port: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].eosPort,
            chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
        };
        this.eos = this.scatter.eos(this.network, __WEBPACK_IMPORTED_MODULE_1_eosjs__, {}, __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].eosProtocol);
    };
    ScatterService.prototype.login = function (successCallback, errorCallbak) {
        var requirements = { accounts: [this.network] };
        var that = this;
        this.scatter.getIdentity(requirements).then(function (identity) {
            if (!identity) {
                return errorCallbak(null);
            }
            that.identity = identity;
            that.scatter.useIdentity(identity.hash);
            successCallback();
        }).catch(function (error) {
            errorCallbak(error);
        });
    };
    ScatterService.prototype.logout = function () {
    };
    ScatterService.prototype.transfer = function (to, amount, memo, successCallback, errorCallback) {
        if (memo === void 0) { memo = ''; }
        var that = this;
        this.login(function () {
            that.eos.transfer(that.identity.accounts[0].name, to, (amount).toString() + ' EOS', memo, []).then(function (transaction) {
                successCallback(transaction);
            }).catch(function (error) {
                errorCallback(error);
            });
        }, function (error) {
            errorCallback(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", Object)
    ], ScatterService.prototype, "identity", void 0);
    ScatterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ScatterService);
    return ScatterService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: '//localhost:4200',
    eosHost: 'p2p.cadeos.io',
    eosPort: 18890,
    eosProtocol: 'https',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map