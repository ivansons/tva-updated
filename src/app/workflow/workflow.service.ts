import { Injectable } from '@angular/core';

import { STEPS } from './workflow.model';

@Injectable()
export class WorkflowService {
    private workflow = [
        { step: STEPS.level, valid: false },
        { step: STEPS.choose, valid: false },
        { step: STEPS.contents, valid: false },
    ];
    validateStep(step: string) {
        // If the state is found, set the valid field to true
        // tslint:disable-next-line:no-var-keyword
        var found = false;
        // tslint:disable-next-line:no-var-keyword
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    }

    resetSteps() {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(element => {
            element.valid = false;
        });
    }

    getFirstInvalidStep(step: string): string {
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
            let item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            } else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    }
}
