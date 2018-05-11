"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormData = /** @class */ (function () {
    function FormData() {
        this.userLevel = '';
        this.areaOptions = '';
        this.pathOptions = '';
        this.pathContent = '';
    }
    FormData.prototype.clear = function () {
        this.userLevel = '';
        this.areaOptions = '';
        this.pathOptions = '';
        this.pathContent = '';
    };
    return FormData;
}());
exports.FormData = FormData;
// "Select Trek Level S=>1"
var Start = /** @class */ (function () {
    function Start() {
        this.userLevel = '';
    }
    return Start;
}());
exports.Start = Start;
// Choose area od Trek S=>2
var Area = /** @class */ (function () {
    function Area() {
        this.areaOptions = '';
    }
    return Area;
}());
exports.Area = Area;
// View Journey options and information S=>3
var Journey = /** @class */ (function () {
    function Journey() {
        this.pathOptions = '';
    }
    return Journey;
}());
exports.Journey = Journey;
//# sourceMappingURL=formData.model.js.map