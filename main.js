(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\r\n\tmargin-top: 50px;\r\n}\r\n\r\nbutton,\r\ndiv.alert {\r\n\tmargin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  \n  <div class=\"row\">\n    <h5 class=\"col-xs-12 col-md-8 offset-md-2\">\n      Это тестовая версия. Для правильной работы должны быть разрешены сторонние файлы cookie\n    </h5>\n  </div>\n  \n  <div class=\"row d-flex justify-content-center\">\n    <button type=\"button\" class=\"btn btn-outline-primary btn-lg\"\n    (click)=\"vkAuth()\">\n      <span class=\"fab fa-vk\"></span>&nbsp;Авторизация ВКонтакте\n    </button>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"alert alert-primary col-xs-12 col-md-8 offset-md-2\" role=\"alert\"\n    *ngIf=\"status == 'connected'\">\n      <p>{{firstName}}&nbsp;{{lastName}}</p>\n      <p>{{nickname}}</p>\n      <p>Ссылка на ВК: <a href=\"{{userHref}}\">{{userHref}}</a></p>\n      <p>Список друзей:</p>\n      <p>{{friends}}</p>\n    </div>\n    \n    <div class=\"alert alert-danger col-xs-12 col-md-8 offset-md-2\" role=\"alert\"\n    *ngIf=\"status == 'not_authorized' || status == 'unknown' || errorMessage\">\n      \n      <p *ngIf=\"status == 'not_authorized'\">\n        Пользователь авторизован ВКонтакте, но не разрешил доступ приложению\n      </p>\n      \n      <p *ngIf=\"status == 'unknown'\">\n        Пользователь не авторизован ВКонтакте\n      </p>\n\n      <p *ngIf=\"errorMessage\">\n        Ошибка.<br>\n        {{errorMessage}}\n      </p>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(vk, http) {
        this.vk = vk;
        this.http = http;
        this.status = '';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'application/json'
            })
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.vk.init({
            apiId: 6824974
        });
    };
    AppComponent.prototype.vkAuth = function () {
        var _this = this;
        this.login().subscribe(function (response) {
            console.log('VK Auth response ', response);
            _this.status = response.status;
            _this.firstName = response.session.user.first_name;
            _this.lastName = response.session.user.last_name;
            _this.nickname = response.session.user.nickname;
            _this.userHref = response.session.user.href;
            _this.getFriends(response.session.user.id).subscribe(function (response) {
                console.log('Friends: ', response);
            }, function (err) { _this.errorMessage = err; });
        }, function (error) {
            console.log('VK Auth error', error);
        });
        // this.oAuthLogin().subscribe(response => {
        // 	console.log('VK OAuth: ', response);
        // });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve) {
            _this.vk.Auth.login(function (response) {
                resolve(response);
            }, 2); /* 2 - Доступ к друзьям */
        }));
    };
    AppComponent.prototype.getFriends = function (userId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve) {
            _this.vk.Api.call('friends.get', { user_id: userId, v: "5.73" }, function (response) {
                resolve(response);
            });
        }));
    };
    AppComponent.prototype.oAuthLogin = function () {
        return this.http.get('https://oauth.vk.com/authorize?client_id=6824974&redirect_uri=https://abaev.github.io/&scope=friends&v=5.92' /*,
        { withCredentials: true }*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // getFriends(userId): Observable<any> {
    //  	return this.http.get('https://api.vk.com/method/friends.get?user_id=' + userId/*,
    //  		{ withCredentials: true }*/
    //  		, this.httpOptions)
    //  			.pipe(catchError(this.handleError));
    //  }
    AppComponent.prototype.handleError = function (error) {
        var message;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // message = 'An error occurred:'+ error.error.message
            message = 'A client-side or network error occurred';
        }
        else {
            // The backend returned an unsuccessful response code.
            // code =  error.status
            // body = error.error
            message = error.status;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(message);
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('VK')),
        __metadata("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                { provide: 'VK', useValue: window['VK'] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my_folder\_web_dev\vk-auth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map