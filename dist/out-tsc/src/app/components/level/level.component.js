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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("../../services/index");
var index_2 = require("../../data/index");
var LevelComponent = /** @class */ (function () {
    function LevelComponent(levelsService, fb, router, formDataService) {
        var _this = this;
        this.levelsService = levelsService;
        this.fb = fb;
        this.router = router;
        this.formDataService = formDataService;
        this.levelsForm = fb.group({
            'start': new forms_1.FormControl(),
        });
        this.levelsService.getLevels().subscribe(function (levels) {
            _this.levels = levels;
        });
    } // end constructor
    LevelComponent.prototype.ngOnInit = function () {
        this.start = this.formDataService.getStart();
        console.log('Level feature loaded!');
    };
    LevelComponent.prototype.save = function (form) {
        if (!this.levelsForm) {
            return false;
        }
        this.formDataService.setStart(this.start);
        return true;
    };
    LevelComponent.prototype.goToNext = function (form) {
        console.log(this.formDataService.getStart);
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/choose']);
        }
    };
    LevelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-level',
            templateUrl: 'level.component.html',
            styleUrls: ['level.component.css'],
            providers: [index_1.LevelsService],
            exportAs: 'ngModel'
        }),
        __metadata("design:paramtypes", [index_1.LevelsService,
            forms_1.FormBuilder,
            router_1.Router,
            index_2.FormDataService])
    ], LevelComponent);
    return LevelComponent;
}());
exports.LevelComponent = LevelComponent;
//# sourceMappingURL=level.component.js.map