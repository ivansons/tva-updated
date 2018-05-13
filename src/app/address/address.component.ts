import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertService} from './../services/index';
import { Address, FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  title = 'Where do you live?';
  address: Address;
  formData: FormData;
  form: any;
  constructor(private router: Router,
    private formDataService: FormDataService, private alertService: AlertService ) {
  }

  ngOnInit() {
      this.address = this.formDataService.getAddress();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      this.formDataService.setAddress(this.address);
      return true;
  }
  register() {
    this.formDataService.create(this.formData)
       .subscribe(data => { this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.form = false;
            });
            // tslint:disable-next-line:no-unused-expression

           console.log(this.alertService.error);

}

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/address']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the result page
          this.router.navigate(['/dashboard']);
      }
  }

}
