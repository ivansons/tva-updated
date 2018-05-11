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
var formData_model_1 = require("./formData.model");
var index_1 = require("../workflow/index");
var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new formData_model_1.FormData();
        this.isStartFormValid = false;
        this.isAreaFormValid = false;
        this.isJourneyFormValid = false;
    }
    FormDataService.prototype.getStart = function () {
        // Return the Start data
        return this.formData.userLevel;
    };
    FormDataService.prototype.setStart = function (data) {
        // Update the start data only when the start Form had been validated successfully
        this.isStartFormValid = true;
        this.formData.userLevel = data;
        // Validate start Step in Workflow
        // this.workflowService.validateStep(STEPS.start);
    };
    FormDataService.prototype.getArea = function () {
        // Return the area type
        return this.formData.areaOptions;
    };
    FormDataService.prototype.setArea = function (data) {
        // Update the area type only when the area Form had been validated successfully
        this.isAreaFormValid = true;
        this.formData.areaOptions = data;
        // Validate area Step in Workflow
        // this.workflowService.validateStep(STEPS.area);
    };
    FormDataService.prototype.getJourney = function () {
        // Return the Journey data
        return this.formData.pathOptions;
    };
    FormDataService.prototype.setJourney = function (data) {
        // Update the area type only when the area Form had been validated successfully
        this.isJourneyFormValid = true;
        this.formData.areaOptions = data;
        // Validate Journey Step in Workflow
        // this.workflowService.validateStep(STEPS.journey);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isStartFormValid = this.isAreaFormValid = this.isJourneyFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isStartFormValid &&
            this.isAreaFormValid &&
            this.isJourneyFormValid;
    };
    FormDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.WorkflowService])
    ], FormDataService);
    return FormDataService;
}());
exports.FormDataService = FormDataService;
//# sourceMappingURL=formData.service.js.map