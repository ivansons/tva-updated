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
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.center = [-85.33973693847656 + (Math.random() - 0.5) * 2, +(Math.random() - 0.5) * 2];
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.alert = function () {
        var latone = -85.33973693847656 + (Math.random() - 0.5) * 2;
        var lattwo = latone + (Math.random() - 0.5) * 2;
        var totallat = 'latone , lattwo';
        return totallat;
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map