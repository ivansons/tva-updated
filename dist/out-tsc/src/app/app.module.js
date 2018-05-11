"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here\
var forms_2 = require("@angular/forms"); // <--- Reactive Forms--->
var http_1 = require("@angular/http");
var angular2_jcf_directive_1 = require("angular2-jcf-directive");
var ngx_swiper_wrapper_1 = require("ngx-swiper-wrapper");
var ngx_swiper_wrapper_2 = require("ngx-swiper-wrapper");
var app_routing_module_1 = require("./app-routing.module");
var http_2 = require("@angular/common/http");
var ngx_mapbox_gl_1 = require("ngx-mapbox-gl");
var DEFAULT_SWIPER_CONFIG = {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
};
// used to create fake backend
var index_1 = require("./_helpers/index");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_helpers/index");
var index_5 = require("./services/index");
var index_6 = require("./home/index");
var index_7 = require("./login/index");
var index_8 = require("./register/index");
var app_component_1 = require("./app.component");
var index_9 = require("./components/index");
var index_10 = require("./workflow/index");
var index_11 = require("./data/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                index_9.LevelComponent,
                index_9.AreaComponent,
                index_9.StartComponent,
                index_9.TrekContentsComponent,
                index_9.RiverTrekStartComponent,
                index_9.RiverTrekContentsComponent,
                index_9.SliderComponent,
                index_9.UserNavComponent,
                index_9.WelcomeComponent,
                index_9.SelectBandComponent,
                index_9.UserDashboard,
                index_9.MapComponent,
                index_2.AlertComponent,
                index_6.HomeComponent,
                index_7.LoginComponent,
                index_8.RegisterComponent,
                index_9.MarkersComponent,
                index_9.LogoutComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                // Custom Modules
                angular2_jcf_directive_1.JcfModule,
                http_2.HttpClientModule,
                ngx_swiper_wrapper_1.SwiperModule,
                forms_2.ReactiveFormsModule,
                http_1.HttpModule,
                ngx_swiper_wrapper_1.SwiperModule,
                ngx_mapbox_gl_1.NgxMapboxGLModule.forRoot({
                    // tslint:disable-next-line:max-line-length
                    accessToken: 'pk.eyJ1IjoiY29udGVudHNjaWVuY2UiLCJhIjoiY2o2ejVndm9yMjdyZzMzczYwdGh2ZHYyZSJ9.KTnjS1mgEkRatw5noEpYvw',
                    // tslint:disable-next-line:max-line-length
                    geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
                })
            ],
            providers: [
                { provide: index_11.FormDataService, useClass: index_11.FormDataService },
                { provide: index_10.WorkflowService, useClass: index_10.WorkflowService },
                index_3.AuthGuard,
                index_5.AlertService,
                index_5.AuthenticationService,
                index_5.UserService,
                index_5.MapService,
                {
                    provide: ngx_swiper_wrapper_2.SWIPER_CONFIG,
                    useValue: DEFAULT_SWIPER_CONFIG
                },
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: index_4.JwtInterceptor,
                    multi: true
                },
                index_1.fakeBackendProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map