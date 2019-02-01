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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex wrap\">\n  <div class=\"col-25 side-sc-container\">\n    <app-sidemenu></app-sidemenu>\n  </div>\n  <div class=\"col-75 side-sc-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NgCv';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/md-to-html.pipe */ "./src/app/pipes/md-to-html.pipe.ts");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/components/project-list/project-list.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidemenu/sidemenu.component */ "./src/app/components/sidemenu/sidemenu.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', children: [
            { path: '', redirectTo: '1', pathMatch: 'full' },
            { path: ':skip', component: _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectListComponent"] }
        ] },
    { path: 'details/l/:id/:skip', component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"] },
    { path: 'details/s/:id/:searchedWord/:skip', component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"] },
    // { path: 'details/:id/s/:skip', component: ProjectDetailsComponent },
    { path: 'search/:work/:skip', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"] },
    { path: 'error', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pipes_md_to_html_pipe__WEBPACK_IMPORTED_MODULE_4__["MdToHtmlPipe"],
                _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectListComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"],
                _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_7__["SidemenuComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-v-center flex-h-center\">\n  <h1>\n    404 error\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  height: 100%; }\n\nh1 {\n  color: #ffe915;\n  font-size: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvQzpcXFVzZXJzXFxDYXZpZGFuXFxEZXNrdG9wXFwzNjVDaGFsYW5nZVxcbmctY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsZUFBYztFQUVaLGdCQUFVLEVBRWIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmgxe1xyXG4gIGNvbG9yOiAjZmZlOTE1O1xyXG4gIGZvbnQ6IHtcclxuICAgIHNpemU6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"detail-sc\" *ngIf=\"work; else load\">\n  <div class=\"flex wrap flex-v-center\">\n    <div class=\"col-60\">\n      <img\n        src=\"{{ work.fields.img.fields.file.url }}\"\n        alt=\"{{ work.fields.title }}\"\n      />\n    </div>\n    <div class=\"col-60\">\n      <h1>{{ work.fields.title }}</h1>\n      <p *ngIf=\"work.fields.technologies.length>1; else manyTech\">Used Technologies:</p>\n      <ng-template #manyTech>Used Technology:</ng-template>\n      <div class=\"flex wrap\">\n        <span\n          class=\"tags\"\n          *ngFor=\"let technologies of work.fields.technologies\"\n        >\n          {{ technologies }}\n        </span>\n      </div>\n      <br><hr><br>\n      <div class=\"white\" [innerHTML]=\"work.fields.longDesc | mdToHtml\"></div>\n      <div class=\"buttons flex wrap\">\n        <a href=\"{{ work.fields.url }}\" target=\"_blank\" class=\"btn\">\n          Go To Site\n        </a>\n        <button class=\"btn\" (click)=\"goToProjects()\">Go Back</button>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #load>\n<!-- <div style=\"font-size:30px; color:#ffe915\">\n    Loading...\n</div> -->\n<div id=\"loading\">\n    <div id=\"loading-center\">\n        <div class=\"loader\">\n            <div id=\"largeBox\"></div>\n            <div id=\"smallBox\"></div>\n        </div>\n    </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-sc {\n  height: 100vh;\n  overflow-y: scroll;\n  padding: 40px 0px;\n  box-sizing: border-box; }\n\nh1 {\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 34px;\n  margin: 10px 0;\n  color: #ffe915;\n  text-transform: capitalize; }\n\np {\n  margin-top: 10px; }\n\n* {\n  color: white; }\n\n@media only screen and (max-width: 1400px) {\n  .col-60 {\n    width: 80% !important; } }\n\n@media only screen and (max-width: 991px) {\n  .col-60 {\n    width: 100% !important;\n    padding-left: 15px;\n    padding-right: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbHMvQzpcXFVzZXJzXFxDYXZpZGFuXFxEZXNrdG9wXFwzNjVDaGFsYW5nZVxcbmctY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2plY3QtZGV0YWlsc1xccHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxlQWRjO0VBZWQsMkJBQTBCLEVBQzNCOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0U7SUFDRSxzQkFBb0IsRUFDckIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsdUJBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFDcEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR5ZWxsb3c6ICNmZmU5MTU7XHJcblxyXG4uZGV0YWlsLXNje1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGNvbG9yOiAkeWVsbG93O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbip7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCl7XHJcbiAgLmNvbC02MHtcclxuICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgLmNvbC02MHtcclxuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contentful.service */ "./src/app/services/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(route, router, contentfulService) {
        this.route = route;
        this.router = router;
        this.contentfulService = contentfulService;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var workId = this.route.snapshot.paramMap.get('id');
        this.skipId = this.route.snapshot.paramMap.get('skip');
        console.log(+this.skipId);
        this.contentfulService.getWork(workId)
            .then(function (work) {
            _this.work = work;
        });
    };
    ProjectDetailsComponent.prototype.isNumber = function () {
        var key = (+this.skipId);
        return key;
    };
    ProjectDetailsComponent.prototype.goToProjects = function () {
        var isSearched = this.route.snapshot.paramMap.get('searchedWord');
        console.log(isSearched);
        if (!isSearched) {
            this.router.navigate(['list', this.skipId]);
        }
        else {
            // this.route.snapshot.paramMap.get('searchedWord');
            this.router.navigate(['search', isSearched, this.skipId]);
        }
    };
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.scss */ "./src/app/components/project-details/project-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-list/project-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"works-sc\" *ngIf=\"filteredWorks.length > 0; else load\">\n  <div class=\"flex wrap\" style=\"min-height: calc(100vh - 40px);\">\n    <div class=\"card col-33\" *ngFor=\"let work of filteredWorks.reverse()\">\n      <div class=\"img-outer\">\n        <img\n          [src]=\"work.fields.img.fields.file.url\"\n          alt=\"{{ work.fields.title }}\"\n        />\n      </div>\n      <h2>{{ work.fields.title }}</h2>\n      <div class=\"content\">\n        <div class=\"flex wrap\">\n          <span\n            class=\"tags\"\n            *ngFor=\"let technologies of (work.fields.technologies | slice: 0:3)\"\n          >\n            {{ technologies }}\n          </span>\n          <span\n            *ngIf=\"work.fields.technologies.length > 3\"\n            style=\"font-size:30px; color:#ffe915\"\n            >...</span\n          >\n        </div>\n        <p>\n          {{ work.fields.shortDesc | slice: 0:120 }}\n          <span *ngIf=\"work.fields.shortDesc.length > 120\">...</span>\n        </p>\n      </div>\n      <div class=\"buttons flex wrap\">\n        <a href=\"{{ work.fields.url }}\" target=\"_blank\" class=\"btn\">\n          Go To Site\n        </a>\n        <button class=\"btn\" (click)=\"goToWorkDetailPage('l', work.sys.id)\">\n          Details\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"paginations flex wrap flex-v-center flex-h-center\">\n      <a class=\"text-center\"\n        *ngFor=\"let pagination of paginations; let i = index\"\n        (click)=\"generatePaginationQuery()\"\n        [routerLink]=\"['/list/' + (i + 1)]\"\n        routerLinkActive=\"active\"\n      >\n        {{ i + 1 }}\n      </a>\n    </div>\n</section>\n<ng-template #load>\n  <!-- <div style=\"font-size:30px; color:#ffe915\">Loading...</div> -->\n  <div id=\"loading\">\n      <div id=\"loading-center\">\n          <div class=\"loader\">\n              <div id=\"largeBox\"></div>\n              <div id=\"smallBox\"></div>\n          </div>\n      </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".works-sc {\n  position: relative;\n  z-index: 50;\n  min-height: 100vh; }\n\n.card {\n  padding: 12px;\n  margin-bottom: 10px;\n  box-sizing: border-box; }\n\n.card .content {\n    width: 100%;\n    height: 122px;\n    overflow-y: auto; }\n\n.img-outer {\n  height: 200px;\n  overflow: hidden; }\n\nh2 {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 34px;\n  margin: 10px 0;\n  color: #ffe915;\n  text-transform: capitalize;\n  margin-bottom: 6px; }\n\np {\n  margin-top: 10px;\n  color: white; }\n\n.paginations {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  right: 0px;\n  z-index: 50;\n  width: 100%;\n  height: 40px;\n  background: #484848;\n  box-shadow: 0px 2px 26px #ffe915;\n  box-sizing: border-box; }\n\n.paginations a {\n    padding: 0px 9px;\n    width: 25px;\n    color: white;\n    transition: .3s ease-in-out;\n    font-size: 18px; }\n\n.paginations a.active {\n      color: #ffe915; }\n\n.paginations a:hover {\n      color: #ffe915; }\n\n@media only screen and (max-width: 1600px) {\n  .img-outer {\n    height: 150px !important; } }\n\n@media only screen and (max-width: 1400px) {\n  .img-outer {\n    height: 134px !important; } }\n\n@media only screen and (max-width: 1221px) {\n  .img-outer {\n    height: 124px !important; } }\n\n@media only screen and (max-width: 1120px) {\n  .img-outer {\n    height: 143px !important; }\n  .col-33 {\n    width: 50%; } }\n\n@media only screen and (max-width: 991px) {\n  .col-33 {\n    width: 100%; }\n  .img-outer {\n    height: auto !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QvQzpcXFVzZXJzXFxDYXZpZGFuXFxEZXNrdG9wXFwzNjVDaGFsYW5nZVxcbmctY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2plY3QtbGlzdFxccHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxjQUFZO0VBQ1osb0JBQW1CO0VBQ25CLHVCQUFzQixFQU12Qjs7QUFURDtJQUtJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZUEvQmM7RUFnQ2QsMkJBQTBCO0VBQzFCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSx5QkFBZ0I7RUFBaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBOUNhO0VBK0NiLGlDQWpEYztFQWtEZCx1QkFBc0IsRUFnQnZCOztBQXpCRDtJQVdJLGlCQUFnQjtJQUNoQixZQUFXO0lBQ1gsYUFBWTtJQUNaLDRCQUEyQjtJQUV6QixnQkFBVSxFQVFiOztBQXhCSDtNQW1CSyxlQTVEVyxFQTZEWDs7QUFwQkw7TUFzQk0sZUEvRFUsRUFnRVg7O0FBS0w7RUFJRTtJQUNFLHlCQUF1QixFQUN4QixFQUFBOztBQUdIO0VBQ0U7SUFDRSx5QkFBdUIsRUFDeEIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UseUJBQXVCLEVBQ3hCLEVBQUE7O0FBR0g7RUFDRTtJQUNFLHlCQUF1QixFQUN4QjtFQUVEO0lBQ0UsV0FBVSxFQUNYLEVBQUE7O0FBSUg7RUFDRTtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0Usd0JBQXNCLEVBQ3ZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QtbGlzdC9wcm9qZWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkeWVsbG93OiAjZmZlOTE1O1xyXG4kYmx1ZTogIzJBMDBCMjtcclxuJGJsYWNrOiAjNDg0ODQ4O1xyXG5cclxuLndvcmtzLXNje1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1MDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgcGFkZGluZzoxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAuY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjJweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLW91dGVye1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbnN7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyNnB4ICR5ZWxsb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBhe1xyXG4gICAgcGFkZGluZzogMHB4IDlweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBjb2xvcjogJHllbGxvdztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCl7XHJcbiAgLy8gLmNvbC0yNXtcclxuICAvLyAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgLy8gfVxyXG4gIC5pbWctb3V0ZXJ7XHJcbiAgICBoZWlnaHQ6IDE1MHB4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KXtcclxuICAuaW1nLW91dGVye1xyXG4gICAgaGVpZ2h0OiAxMzRweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjFweCl7XHJcbiAgLmltZy1vdXRlcntcclxuICAgIGhlaWdodDogMTI0cHghaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpe1xyXG4gIC5pbWctb3V0ZXJ7XHJcbiAgICBoZWlnaHQ6IDE0M3B4IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb2wtMzN7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gIC5jb2wtMzN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmltZy1vdXRlcntcclxuICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contentful.service */ "./src/app/services/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(route, router, contentfulService) {
        this.route = route;
        this.router = router;
        this.contentfulService = contentfulService;
        this.allWorks = [];
        this.filteredWorks = [];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getAllWorks();
    };
    ProjectListComponent.prototype.goToWorkDetailPage = function (linkTpye, workId) {
        this.router.navigate(['/details', linkTpye, workId, this.skipId]);
    };
    ProjectListComponent.prototype.getAllWorks = function () {
        var _this = this;
        this.contentfulService.getWorks()
            .then(function (works) {
            _this.allWorks = works;
            var paginationCount = Math.ceil(_this.allWorks.length / 6);
            _this.paginations = Array(paginationCount).fill(function (x, i) { return i; });
            _this.generatePaginationQuery();
        });
    };
    ProjectListComponent.prototype.generatePaginationQuery = function () {
        var _this = this;
        this.filteredWorks = [];
        setTimeout(function () {
            _this.skipId = +_this.route.snapshot.paramMap.get('skip');
            var limit;
            var skipVal = ((_this.allWorks.length - 6) - ((_this.skipId - 1) * 6));
            if (_this.paginations.length > 1) {
                if (_this.skipId <= _this.paginations.length && _this.skipId > 0) {
                    if (((_this.allWorks.length - 6) - ((_this.skipId - 1) * 6)) < 0) {
                        skipVal = 0;
                        limit = _this.allWorks.length % 6;
                    }
                    else {
                        limit = 6;
                    }
                    if (_this.allWorks.length > 0) {
                        var query = {
                            'sys': { 'type': 'Array' },
                            'skip': skipVal,
                            'limit': limit
                        };
                        _this.contentfulService.getWorks(query)
                            .then(function (works) {
                            _this.filteredWorks = works;
                        });
                    }
                    else {
                        _this.generatePaginationQuery();
                    }
                }
                else {
                    _this.router.navigate(['/error']);
                }
            }
            else {
                console.log(_this.paginations.length);
            }
        }, 200);
    };
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/components/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.scss */ "./src/app/components/project-list/project-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"works-sc\">\n  <form class=\"flex\" #searchForm=\"ngForm\" (ngSubmit)=\"search()\">\n      <input\n        type=\"text\"\n        name=\"search\"\n        id=\"search\"\n        [(ngModel)]=\"keyWord\"\n        placeholder=\"{{keyWord}}\"\n        required\n      />\n      <button class=\"tab\" (click)=\"search()\" [disabled]=\"searchForm.invalid\">search</button>\n    </form>\n    <div class=\"searchedElements\" *ngIf=\"searchedWorks.length > 0; else load\">\n      <div class=\"flex wrap\">\n        <div class=\"card col-33\" *ngFor=\"let work of searchedWorks.reverse()\">\n          <div class=\"img-outer\">\n            <img\n              [src]=\"work.fields.img.fields.file.url\"\n              alt=\"{{ work.fields.title }}\"\n            />\n          </div>\n          <h2>{{ work.fields.title }}</h2>\n          <div class=\"content\">\n            <div class=\"flex wrap\">\n              <span\n                class=\"tags\"\n                *ngFor=\"let technologies of (work.fields.technologies | slice: 0:3)\"\n              >\n                {{ technologies }}\n              </span>\n              <span\n                *ngIf=\"work.fields.technologies.length > 3\"\n                style=\"font-size:30px; color:#ffe915\"\n                >...</span\n              >\n            </div>\n            <p>\n              {{ work.fields.shortDesc | slice: 0:120 }}\n              <span *ngIf=\"work.fields.shortDesc.length > 120\">...</span>\n            </p>\n          </div>\n          <div class=\"buttons flex wrap\">\n            <a href=\"{{ work.fields.url }}\" target=\"_blank\" class=\"btn\">\n              Go To Site\n            </a>\n            <button class=\"btn\" (click)=\"goToWorkDetailPage('s', work.sys.id)\">\n              Details\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"paginations flex wrap\"> -->\n          <!-- <button (click)=\"search()\">search</button> -->\n          <!-- <a class=\"text-right\"\n            *ngFor=\"let pagination of paginations; let i = index\"\n            (click)=\"generatePaginationQuery()\"\n            [routerLink]=\"['/list/' + (i + 1)]\"\n            routerLinkActive=\"active\"\n          >\n            {{ i + 1 }}\n          </a> -->\n        <!-- </div> -->\n    </div>\n  </section>\n  <ng-template #load>\n    <!-- <div style=\"font-size:30px; color:#ffe915\">Loading...</div> -->\n    <div id=\"loading\">\n        <div id=\"loading-center\">\n            <div class=\"loader\">\n                <div id=\"largeBox\"></div>\n                <div id=\"smallBox\"></div>\n            </div>\n        </div>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".works-sc {\n  position: relative;\n  z-index: 50;\n  min-height: 100vh; }\n\n.card {\n  padding: 12px;\n  margin-bottom: 10px;\n  box-sizing: border-box; }\n\n.card .content {\n    width: 100%;\n    height: 122px;\n    overflow-y: auto; }\n\n.img-outer {\n  height: 200px;\n  overflow: hidden; }\n\nh2 {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 34px;\n  margin: 10px 0;\n  color: #ffe915;\n  text-transform: capitalize;\n  margin-bottom: 6px; }\n\np {\n  margin-top: 10px;\n  color: white; }\n\n.paginations {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  right: 0px;\n  z-index: 50;\n  width: 100%;\n  height: 40px;\n  background: #484848;\n  box-shadow: 0px 2px 26px #ffe915;\n  box-sizing: border-box; }\n\n.paginations a {\n    padding: 0px 9px;\n    width: 25px;\n    color: white;\n    transition: .3s ease-in-out;\n    font-size: 18px; }\n\n.paginations a.active {\n      color: #ffe915; }\n\n.paginations a:hover {\n      color: #ffe915; }\n\n@media only screen and (max-width: 1600px) {\n  .img-outer {\n    height: 150px !important; } }\n\n@media only screen and (max-width: 1400px) {\n  .img-outer {\n    height: 134px !important; } }\n\n@media only screen and (max-width: 1221px) {\n  .img-outer {\n    height: 124px !important; } }\n\n@media only screen and (max-width: 1120px) {\n  .img-outer {\n    height: 143px !important; }\n  .col-33 {\n    width: 50%; } }\n\n@media only screen and (max-width: 991px) {\n  .col-33 {\n    width: 100%; }\n  .img-outer {\n    height: auto !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzpcXFVzZXJzXFxDYXZpZGFuXFxEZXNrdG9wXFwzNjVDaGFsYW5nZVxcbmctY3Yvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxjQUFZO0VBQ1osb0JBQW1CO0VBQ25CLHVCQUFzQixFQU12Qjs7QUFURDtJQUtJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZUEvQmM7RUFnQ2QsMkJBQTBCO0VBQzFCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSx5QkFBZ0I7RUFBaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBOUNhO0VBK0NiLGlDQWpEYztFQWtEZCx1QkFBc0IsRUFnQnZCOztBQXpCRDtJQVdJLGlCQUFnQjtJQUNoQixZQUFXO0lBQ1gsYUFBWTtJQUNaLDRCQUEyQjtJQUV6QixnQkFBVSxFQVFiOztBQXhCSDtNQW1CSyxlQTVEVyxFQTZEWDs7QUFwQkw7TUFzQk0sZUEvRFUsRUFnRVg7O0FBS0w7RUFJRTtJQUNFLHlCQUF1QixFQUN4QixFQUFBOztBQUdIO0VBQ0U7SUFDRSx5QkFBdUIsRUFDeEIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UseUJBQXVCLEVBQ3hCLEVBQUE7O0FBR0g7RUFDRTtJQUNFLHlCQUF1QixFQUN4QjtFQUVEO0lBQ0UsV0FBVSxFQUNYLEVBQUE7O0FBSUg7RUFDRTtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0Usd0JBQXNCLEVBQ3ZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkeWVsbG93OiAjZmZlOTE1O1xyXG4kYmx1ZTogIzJBMDBCMjtcclxuJGJsYWNrOiAjNDg0ODQ4O1xyXG5cclxuLndvcmtzLXNje1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1MDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgcGFkZGluZzoxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAuY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjJweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLW91dGVye1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbnN7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyNnB4ICR5ZWxsb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBhe1xyXG4gICAgcGFkZGluZzogMHB4IDlweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBjb2xvcjogJHllbGxvdztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCl7XHJcbiAgLy8gLmNvbC0yNXtcclxuICAvLyAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgLy8gfVxyXG4gIC5pbWctb3V0ZXJ7XHJcbiAgICBoZWlnaHQ6IDE1MHB4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KXtcclxuICAuaW1nLW91dGVye1xyXG4gICAgaGVpZ2h0OiAxMzRweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjFweCl7XHJcbiAgLmltZy1vdXRlcntcclxuICAgIGhlaWdodDogMTI0cHghaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpe1xyXG4gIC5pbWctb3V0ZXJ7XHJcbiAgICBoZWlnaHQ6IDE0M3B4IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb2wtMzN7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gIC5jb2wtMzN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmltZy1vdXRlcntcclxuICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contentful.service */ "./src/app/services/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, router, contentfulService) {
        this.route = route;
        this.router = router;
        this.contentfulService = contentfulService;
        this.searchedWorks = [];
        this.keyWord = this.route.snapshot.paramMap.get('work');
        this.search();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SearchComponent.prototype.goToWorkDetailPage = function (linkTpye, workId) {
        this.router.navigate(['/details', linkTpye, workId, this.keyWord, '1']);
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.router.navigate(['/search', this.keyWord, '1']);
        this.contentfulService.getWorks()
            .then(function (works) {
            var keyWord = _this.keyWord;
            _this.searchedWorks = works.filter(function (item) {
                return JSON.stringify(item).toLowerCase().includes(keyWord);
            });
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sidemenu/sidemenu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"close text-center\" (click)=\"isMenuOpen()\">\n    <i *ngIf=\"opened\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    <i *ngIf=\"!opened\" class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n</div>\n<section class=\"side-sc\" *ngIf=\"persons && profileImgs[0]\" [class.openMenu]=\"opened\">\n  <div class=\"img-outer\">\n    <div class=\"search\" *ngIf=\"!isHidden()\">\n      <form class=\"flex\" #searchForm=\"ngForm\" (ngSubmit)=\"search()\">\n        <input\n          type=\"text\"\n          name=\"search\"\n          id=\"search\"\n          [(ngModel)]=\"searchedWorks\"\n          placeholder=\"Search...\"\n          required\n        />\n        <button class=\"tab\" (click)=\"search()\" [disabled]=\"searchForm.invalid\">search</button>\n      </form>\n    </div>\n    <img\n      src=\"{{ profileImgs[0].fields.img.fields.file.url }}\"\n      alt=\"Cavidan Talibov\"\n    />\n    <a\n      href=\"https://cavidann.github.io/CV/images/Cavidan_Tal%C4%B1bov.pdf\"\n      target=\"_blank\"\n      >Show Cv`s PDF</a\n    >\n  </div>\n\n  <div class=\"flex\">\n    <div\n      [ngClass]=\"isActive(persons[0].fields.title, 'personal') ? 'active' : ''\"\n      class=\"tab flex flex-v-center col-20\"\n      (click)=\"getChosenSpeciality('personal')\"\n    >\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n    </div>\n    <div\n      [ngClass]=\"isActive(persons[0].fields.title, 'contacts') ? 'active' : ''\"\n      class=\"tab flex flex-v-center col-20\"\n      (click)=\"getChosenSpeciality('contacts')\"\n    >\n      <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n    </div>\n    <div\n      [ngClass]=\"isActive(persons[0].fields.title, 'education') ? 'active' : ''\"\n      class=\"tab flex flex-v-center col-20\"\n      (click)=\"getChosenSpeciality('education')\"\n    >\n      <i class=\"fas fa-book\" aria-hidden=\"true\"></i>\n    </div>\n    <div\n      [ngClass]=\"\n        isActive(persons[0].fields.title, 'experience') ? 'active' : ''\n      \"\n      class=\"tab flex flex-v-center col-20\"\n      (click)=\"getChosenSpeciality('experience')\"\n    >\n      <i class=\"fab fa-black-tie\" aria-hidden=\"true\"></i>\n    </div>\n    <div\n      [ngClass]=\"isActive(persons[0].fields.title, 'skills') ? 'active' : ''\"\n      class=\"tab flex flex-v-center col-20\"\n      (click)=\"getChosenSpeciality('skills')\"\n    >\n      <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n\n  <div class=\"speciality-content\">\n    <h4>{{ persons[0].fields.title }}</h4>\n    <div [innerHTML]=\"persons[0].fields.desc | mdToHtml\"></div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/sidemenu/sidemenu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-sc {\n  background: #ffe915;\n  position: relative;\n  z-index: 100; }\n  .side-sc .search {\n    width: 100%;\n    background: #ffe915; }\n  .side-sc h4 {\n    text-transform: capitalize;\n    font-size: 2.28rem;\n    font-weight: 400;\n    line-height: 2.508rem;\n    margin: 1.14rem 0 0.912rem 0; }\n  .side-sc .speciality-content {\n    padding: 0px 39px;\n    padding-bottom: 26px; }\n  .side-sc .img-outer {\n    position: relative; }\n  .side-sc .img-outer a {\n      position: absolute;\n      left: 0px;\n      bottom: 0px;\n      width: 100%;\n      background: #484848;\n      color: white !important;\n      font-weight: bold;\n      font-size: 17px;\n      line-height: 43px;\n      padding-left: 20px;\n      transition: .3s ease-in-out;\n      text-decoration: none !important;\n      box-sizing: border-box; }\n  .side-sc .img-outer a:hover {\n        letter-spacing: .7px; }\n  @media only screen and (max-width: 824px) {\n  .speciality-content {\n    padding: 0px 15px !important;\n    padding-bottom: 20px !important; } }\n  @media only screen and (max-width: 667px) {\n  .speciality-content {\n    padding: 0px 36px !important;\n    padding-bottom: 20px !important; } }\n  @media only screen and (max-width: 414px) {\n  .speciality-content {\n    padding: 0px 15px !important;\n    padding-bottom: 20px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbWVudS9DOlxcVXNlcnNcXENhdmlkYW5cXERlc2t0b3BcXDM2NUNoYWxhbmdlXFxuZy1jdi9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZW1lbnVcXHNpZGVtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0JBSGM7RUFJZCxtQkFBa0I7RUFDbEIsYUFBWSxFQXlDYjtFQTVDRDtJQUtJLFlBQVc7SUFDWCxvQkFSWSxFQVNiO0VBUEg7SUFVSSwyQkFBMEI7SUFDMUIsbUJBQWtCO0lBQ2xCLGlCQUFnQjtJQUNoQixzQkFBcUI7SUFDckIsNkJBQTRCLEVBQzdCO0VBZkg7SUFtQkksa0JBQWlCO0lBQ2pCLHFCQUFvQixFQUNyQjtFQXJCSDtJQXdCSSxtQkFBa0IsRUFtQm5CO0VBM0NIO01BMEJNLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsWUFBVztNQUNYLFlBQVc7TUFDWCxvQkFqQ1M7TUFrQ1Qsd0JBQXNCO01BQ3RCLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGtCQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsNEJBQTJCO01BQzNCLGlDQUFnQztNQUNoQyx1QkFBc0IsRUFJdkI7RUExQ0w7UUF3Q1EscUJBQW9CLEVBQ3JCO0VBS1A7RUFDRTtJQUNFLDZCQUEyQjtJQUMzQixnQ0FBOEIsRUFDL0IsRUFBQTtFQUdIO0VBQ0U7SUFDRSw2QkFBMkI7SUFDM0IsZ0NBQThCLEVBQy9CLEVBQUE7RUFHSDtFQUNFO0lBQ0UsNkJBQTJCO0lBQzNCLGdDQUE4QixFQUMvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjazogIzQ4NDg0ODtcclxuJHllbGxvdzogI2ZmZTkxNTtcclxuXHJcbi5zaWRlLXNje1xyXG4gIGJhY2tncm91bmQ6ICR5ZWxsb3c7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICAuc2VhcmNoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xyXG4gIH1cclxuXHJcbiAgaDR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMi4yOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMi41MDhyZW07XHJcbiAgICBtYXJnaW46IDEuMTRyZW0gMCAwLjkxMnJlbSAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zcGVjaWFsaXR5LWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHggMzlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1vdXRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGF7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjRweCl7XHJcbiAgLnNwZWNpYWxpdHktY29udGVudHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpe1xyXG4gIC5zcGVjaWFsaXR5LWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHggMzZweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KXtcclxuICAuc3BlY2lhbGl0eS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHghaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sidemenu/sidemenu.component.ts ***!
  \***********************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contentful.service */ "./src/app/services/contentful.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(route, router, contentfulService) {
        this.route = route;
        this.router = router;
        this.contentfulService = contentfulService;
        // allWorks;
        this.searchedWorks = '';
        this.profileImgs = [];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getChosenSpeciality('skills');
        this.contentfulService.getProfileImgs()
            .then(function (profileImgs) { return _this.profileImgs = profileImgs; });
        this.opened = true;
    };
    SidemenuComponent.prototype.getChosenSpeciality = function (chosenSpeciality) {
        var _this = this;
        this.contentfulService.getPersons()
            .then(function (persons) {
            _this.persons = persons;
            _this.persons = _this.persons.filter(function (person) { return person.fields.title === chosenSpeciality; });
        });
    };
    SidemenuComponent.prototype.isHidden = function () {
        return this.router.url.includes('search');
    };
    SidemenuComponent.prototype.search = function (searchForm) {
        this.opened = false;
        this.router.navigate(['/search', this.searchedWorks, '1']);
    };
    SidemenuComponent.prototype.isActive = function (activated, current) {
        return activated === current;
    };
    SidemenuComponent.prototype.isMenuOpen = function () {
        this.opened = !this.opened;
    };
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/components/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/components/sidemenu/sidemenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_2__["ContentfulService"]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/pipes/md-to-html.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/md-to-html.pipe.ts ***!
  \******************************************/
/*! exports provided: MdToHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdToHtmlPipe", function() { return MdToHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MdToHtmlPipe = /** @class */ (function () {
    function MdToHtmlPipe() {
    }
    MdToHtmlPipe.prototype.transform = function (value, args) {
        return marked__WEBPACK_IMPORTED_MODULE_1__(value);
    };
    MdToHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mdToHtml'
        })
    ], MdToHtmlPipe);
    return MdToHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/contentful.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/contentful.service.ts ***!
  \************************************************/
/*! exports provided: ContentfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function() { return ContentfulService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentfulService = /** @class */ (function () {
    function ContentfulService() {
        this.client = Object(contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"])({
            space: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contentful.spaceId,
            accessToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contentful.token
        });
    }
    ContentfulService.prototype.getWorks = function (query) {
        return this.client.getEntries(Object.assign({
            content_type: 'lesson',
            order: 'sys.createdAt'
        }, query))
            .then(function (res) { return res.items; });
    };
    ContentfulService.prototype.getWork = function (workId) {
        return this.client.getEntries(Object.assign({
            content_type: 'lesson'
        }, { 'sys.id': workId }))
            .then(function (res) { return res.items[0]; });
    };
    ContentfulService.prototype.getPersons = function (query) {
        return this.client.getEntries(Object.assign({
            content_type: 'person'
        }, query))
            .then(function (res) { return res.items; });
    };
    ContentfulService.prototype.getPerson = function (personId) {
        return this.client.getEntries(Object.assign({
            content_type: 'person'
        }, { 'sys.id': personId }))
            .then(function (res) { return res.items[0]; });
    };
    ContentfulService.prototype.getProfileImgs = function (query) {
        return this.client.getEntries(Object.assign({
            content_type: 'profileImg'
        }, query))
            .then(function (res) { return res.items; });
    };
    ContentfulService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContentfulService);
    return ContentfulService;
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
    production: false,
    contentful: {
        spaceId: '281km1twjw48',
        token: '5fee26e83469c19b78031add5fe4977869ac9a036a3d8d605cf02fc01f1b9903'
    }
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cavidan\Desktop\365Chalange\ng-cv\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map