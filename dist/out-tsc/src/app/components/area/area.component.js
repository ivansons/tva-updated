"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../services/index");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var AreaComponent = /** @class */ (function () {
    function AreaComponent(areasService, fb, router) {
        var _this = this;
        this.areasService = areasService;
        this.fb = fb;
        this.router = router;
        this.areasService.getAreas().subscribe(function (areas) {
            _this.areas = areas;
        });
        this.areaForm = fb.group({
            'area': new forms_1.FormControl(['', forms_1.Validators.required]),
            'validate': new forms_1.FormControl([!1]),
        });
    }
    AreaComponent.prototype.ngOnInit = function () {
    };
    AreaComponent.prototype.onSubmit = function () {
        console.log(this.areaForm.value);
        this.router.navigateByUrl('/contents');
    };
    AreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-area',
            templateUrl: 'area.component.html',
            styleUrls: ['area.component.css'],
            providers: [index_1.AreasService]
        }),
        __metadata("design:paramtypes", [index_1.AreasService, forms_1.FormBuilder, router_1.Router])
    ], AreaComponent);
    return AreaComponent;
}());
exports.AreaComponent = AreaComponent;
//# sourceMappingURL=area.component.js.map