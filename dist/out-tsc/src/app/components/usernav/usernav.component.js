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
var UserNavComponent = /** @class */ (function () {
    function UserNavComponent() {
    }
    UserNavComponent.prototype.ngOnInit = function () {
    };
    UserNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            // tslint:disable-next-line:component-selector
            selector: 'usernav-component',
            templateUrl: 'usernav.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], UserNavComponent);
    return UserNavComponent;
}());
exports.UserNavComponent = UserNavComponent;
//# sourceMappingURL=usernav.component.js.map