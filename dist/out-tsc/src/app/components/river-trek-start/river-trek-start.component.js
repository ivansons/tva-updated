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
var index_2 = require("../../data/index");
var RiverTrekStartComponent = /** @class */ (function () {
    function RiverTrekStartComponent(knowledgeService, fb, router, formDataService) {
        var _this = this;
        this.knowledgeService = knowledgeService;
        this.fb = fb;
        this.router = router;
        this.formDataService = formDataService;
        this.knowledgeService.getKnows().subscribe(function (knows) {
            _this.knows = knows;
            console.log(knows);
        });
        this.riverTrekForm = fb.group({
            journey: new forms_1.FormControl(),
        });
    }
    RiverTrekStartComponent.prototype.ngOnInit = function () {
        this.journey = this.formDataService.getJourney();
        console.log('Level feature loaded!');
        /*this.riverTrekForm = this.fb.group({
           knows: this.fb.array([ this.treks() ])
         });*/
    };
    /*treks(): FormGroup {
      return this.fb.group({
        status: new FormControl({})
      });*/
    RiverTrekStartComponent.prototype.save = function (form) {
        if (!this.journey) {
            return false;
        }
        this.formDataService.setStart(this.journey);
        return true;
    };
    RiverTrekStartComponent.prototype.goToNext = function () {
        this.router.navigate(['/map']);
    };
    RiverTrekStartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-river-trek-start',
            templateUrl: 'river-trek-start.component.html',
            styleUrls: ['river-trek-start.component.css'],
            providers: [index_1.KnowledgeService]
        }),
        __metadata("design:paramtypes", [index_1.KnowledgeService,
            forms_1.FormBuilder, router_1.Router, index_2.FormDataService])
    ], RiverTrekStartComponent);
    return RiverTrekStartComponent;
}());
exports.RiverTrekStartComponent = RiverTrekStartComponent;
//# sourceMappingURL=river-trek-start.component.js.map