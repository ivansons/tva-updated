import { Injectable } from '@angular/core';


import { FormData, Personal, Address, Ages} from './formData.model';
import { STEPS, WorkflowService,  } from '../workflow/index';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid = false;
    private isAgeFormValid = false;
    private isAddressFormValid = false;

    constructor(private workflowService: WorkflowService, private http: HttpClient) {
    }

    getPersonal(): Personal {
            const personal: Personal = {
            userName: this.formData.userName,
            passWord: this.formData.passWord,
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    }

    update(user: FormData) {
        return this.http.put('/api/users/' + user.id, user);
    }


    create(user: FormData) {
        return this.http.post('/api/users', user);
    }


    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

    getAll() {
        return this.http.get<FormData[]>('/api/users');
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
       this.formData.userName = data.userName;
       this.formData.passWord = data.passWord;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getAges(): Ages {
        // Return age
        const ages: Ages = {
        age: this.formData.age,
    };
    return ages;
}

    setAges(data: Ages) {
        // Update the work type only when the Work Form had been validated successfully
        this.isAgeFormValid = true;
        this.formData.age = data.age;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.ages);
    }

    getAddress(): Address {
        // Return the Address data
        const address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
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
        this.isPersonalFormValid = this.isAgeFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isAgeFormValid &&
                this.isAddressFormValid;
    }
}
