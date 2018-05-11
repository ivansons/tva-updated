"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var workflow_model_1 = require("./workflow.model");
var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: workflow_model_1.STEPS.level, valid: false },
            { step: workflow_model_1.STEPS.choose, valid: false },
            { step: workflow_model_1.STEPS.contents, valid: false },
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true
        // tslint:disable-next-line:no-var-keyword
        var found = false;
        // tslint:disable-next-line:no-var-keyword
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        // tslint:disable-next-line:no-var-keyword
        var found = false;
        // tslint:disable-next-line:no-var-keyword
        var valid = true;
        // tslint:disable-next-line:no-var-keyword
        var redirectToStep = '';
        // tslint:disable-next-line:no-var-keyword
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            // tslint:disable-next-line:prefer-const
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = __decorate([
        core_1.Injectable()
    ], WorkflowService);
    return WorkflowService;
}());
exports.WorkflowService = WorkflowService;
//# sourceMappingURL=workflow.service.js.map