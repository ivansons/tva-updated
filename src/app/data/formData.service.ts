import { Injectable } from '@angular/core';

import { FormData, Journey, Area, Start } from './formData.model';
import { WorkflowService, STEPS } from '../workflow/index';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isStartFormValid  = false;
    private isAreaFormValid = false;
    private isJourneyFormValid = false;

    constructor(private workflowService: WorkflowService) {
    }

    getStart() {
        // Return the Start data
        return this.formData.userLevel;
    }

    setStart(data: string) {
        // Update the start data only when the start Form had been validated successfully
        this.isStartFormValid = true;
        this.formData.userLevel = data;
        // Validate start Step in Workflow
        this.workflowService.validateStep(STEPS.start);
    }

    getArea() {
        // Return the area type
        return this.formData.areaOptions;
    }

    setArea(data: string) {
        // Update the area type only when the area Form had been validated successfully
        this.isAreaFormValid = true;
        this.formData.areaOptions = data;
        // Validate area Step in Workflow
        this.workflowService.validateStep(STEPS.area);
    }

    getJourney() {
        // Return the Journey data
        return   this.formData.pathOptions;
    }

    setJourney(data: string) {
        // Update the area type only when the area Form had been validated successfully
        this.isJourneyFormValid = true;
        this.formData.areaOptions = data;
        // Validate Journey Step in Workflow
        this.workflowService.validateStep(STEPS.journey);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isStartFormValid = this.isAreaFormValid = this.isJourneyFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isStartFormValid &&
                this.isAreaFormValid &&
                this.isJourneyFormValid;
    }
}
