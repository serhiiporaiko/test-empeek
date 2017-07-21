webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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

module.exports = "<div class=\"container\">\r\n    <div class=\"menu\">\r\n        <h1>Main</h1>\r\n        <div>\r\n            Overview\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">   \r\n        <div class=\"column\">\r\n            <h1>Items</h1>\r\n            <div class=\"input_group\">\r\n                <button\r\n                    [disabled]=\"!(itemNameToAdd || '').trim()\"\r\n                    (click)=\"addItem()\"\r\n                    class=\"btn btn_primary\">\r\n                    Add new\r\n                </button>\r\n                <div class=\"input\">\r\n                    <input [(ngModel)]=\"itemNameToAdd\" (keydown.enter)=\"addItem()\" class=\"add_name\" type=\"text\" name=\"\" placeholder=\"Type name here...\">\r\n                </div>\r\n            </div>\r\n            <div class=\"items-container scrollable\">\r\n                <div *ngFor=\"let item of items\" (click)=\"setActiveItem(item)\" [ngClass]=\"{ 'active': isActiveItem(item) }\">\r\n                    <div class=\"item_col line clearfix\">\r\n                        <button (click)=\"deleteItem(item.id)\" class=\"btn btn_delete\">\r\n                            Delete\r\n                        </button>\r\n                        <div class=\"ellipsis title\">{{ item.name }}</div>\r\n                        <div class=\"badge\" *ngIf=\"item.comments.length > 0\">{{ item.comments.length }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"column\">\r\n            <h1>Comments #2</h1>\r\n            <div *ngIf=\"activeItem\" class=\"comments-container\">\r\n                <div class=\"comments_col post-comment\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"https://fakeimg.pl/50x50/\" alt=\"Anonymous\">\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <textarea\r\n                            [(ngModel)]=\"commentTextToAdd\"\r\n                            (keydown.enter)=\"addComment(activeItem.id);false\"\r\n                            placeholder=\"Type comment here... (press ENTER to send)\"\r\n                            rows=\"5\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"scrollable\">\r\n                    <div *ngFor=\"let comment of activeItem.comments\" class=\"comments_col line clearfix\">\r\n                        <div class=\"icon\">\r\n                            <img [src]=\"comment.author.photoUrl\" [alt]=\"comment.author.name\">\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            {{ comment.text }}\r\n                        </div>\r\n                    </div>                    \r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("../../../../../src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_service__ = __webpack_require__("../../../../../src/app/items.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(itemsService) {
        this.itemsService = itemsService;
        this.items = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.items = this.itemsService.getItems();
        if (this.items.length > 0)
            this.activeItem = this.items[0];
    };
    AppComponent.prototype.addItem = function () {
        var name = (this.itemNameToAdd || '').trim();
        if (name) {
            var item = this.itemsService.addItem(this.itemNameToAdd);
            this.itemNameToAdd = '';
            this.activeItem = item;
        }
    };
    AppComponent.prototype.deleteItem = function (id) {
        if (confirm('Are you sure?')) {
            this.itemsService.deleteItem(id);
            if (this.activeItem && id == this.activeItem.id) {
                if (this.items.length > 0)
                    this.activeItem = this.items[0];
                else
                    this.activeItem = undefined;
            }
        }
    };
    AppComponent.prototype.isActiveItem = function (item) {
        return this.activeItem && this.activeItem.id == item.id;
    };
    AppComponent.prototype.setActiveItem = function (item) {
        this.activeItem = item;
        this.commentTextToAdd = '';
    };
    AppComponent.prototype.addComment = function (id) {
        var text = (this.commentTextToAdd || '').trim();
        if (text) {
            this.itemsService.addComment(id, this.commentTextToAdd);
            this.commentTextToAdd = '';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__items_service__["a" /* ItemsService */], __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__items_service__["a" /* ItemsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("../../../../../src/app/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsService = (function () {
    function ItemsService(storageService) {
        this.storageService = storageService;
        this.ITEMS_KEY = "items";
    }
    ItemsService.prototype.getItems = function () {
        if (this.items)
            return this.items;
        this.items = this.storageService.getItem(this.ITEMS_KEY);
        if (!this.items)
            this.items = [];
        return this.items;
    };
    ItemsService.prototype.newId = function (arr) {
        if (!arr || arr.length == 0)
            return 1;
        var maxId = Math.max.apply(null, arr.map(function (p) { return p.id; }));
        return maxId + 1;
    };
    ItemsService.prototype.saveItems = function () {
        this.storageService.setItem(this.ITEMS_KEY, this.items);
    };
    ItemsService.prototype.addItem = function (name) {
        var item = {
            id: this.newId(this.items),
            name: (name || '').trim(),
            comments: []
        };
        this.items.push(item);
        this.saveItems();
        return item;
    };
    ItemsService.prototype.deleteItem = function (id) {
        var itemIndex = this.items.findIndex(function (item) { return item.id == id; });
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
            this.saveItems();
        }
    };
    ItemsService.prototype.addComment = function (id, text) {
        var item = this.items.find(function (item) { return item.id == id; });
        if (item) {
            item.comments.push({
                id: this.newId(item.comments),
                text: (text || '').trim(),
                author: {
                    name: 'Anonymous',
                    photoUrl: 'https://fakeimg.pl/50x50/'
                }
            });
            this.saveItems();
        }
    };
    return ItemsService;
}());
ItemsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]) === "function" && _a || Object])
], ItemsService);

var _a;
//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ "../../../../../src/app/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageService.prototype.setItem = function (key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map