import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import {FormDataService  } from '../data/index';
import { Personal } from '../data/formData.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;
  @Input() formData;
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
      this.personal = this.formDataService.getPersonal();
      console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      this.formDataService.setPersonal(this.personal);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/address']);
      }
  }

}
