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
var LevelComponent = /** @class */ (function () {
    function LevelComponent(levelsService, fb, router) {
        var _this = this;
        this.levelsService = levelsService;
        this.fb = fb;
        this.router = router;
        // tslint:disable-next-line:no-inferrable-types
        this.name = '';
        this.levelsForm = fb.group({
            'name': new forms_1.FormControl(['', forms_1.Validators.required]),
            'validate': new forms_1.FormControl([!0]),
        });
        this.levelsService.getLevels().subscribe(function (levels) {
            _this.levels = levels;
        });
    }
    LevelComponent.prototype.ngOnInit = function () {
    };
    LevelComponent.prototype.onSubmit = function () {
        console.log(this.levelsForm.value);
        this.router.navigateByUrl('/choose');
    };
    LevelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-level',
            templateUrl: 'level.component.html',
            styleUrls: ['level.component.css'],
            providers: [index_1.LevelsService]
        }),
        __metadata("design:paramtypes", [index_1.LevelsService,
            forms_1.FormBuilder,
            router_1.Router])
    ], LevelComponent);
    return LevelComponent;
}());
exports.LevelComponent = LevelComponent;
/*
export class LevelComponent implements OnInit {

  levels: Levels[];
  levelsForm: FormGroup;

  constructor(private levelsService: LevelsService,
     private fb: FormBuilder,
     private router: Router) {}
  ngOnInit() {

    this.levelsList();
  }



levelsList(): FormGroup {
  this.levelsService.getLevels().subscribe(levels => {
this.levels = levels;
   });
  this.levelsForm = this.fb.group ({
    name: new FormControl()
   });
return this.fb.group({
  name: ['']
});
}




  onSubmit() {

    console.log('Form Submitted!');
    this.router.navigateByUrl('/choose');
}

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
*/
//# sourceMappingURL=level.component.js.map