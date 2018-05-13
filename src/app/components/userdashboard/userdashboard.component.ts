import { Component, OnInit, Input } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { FormDataService } from '../../data/index';
import { FormData } from '../../data/formData.model';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class UserDashboard implements OnInit {
  title = 'Thanks for staying tuned!';
  @Input() formData: FormData;
  isFormValid = false;
  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      console.log('Result feature loaded!');
  }

  submit() {
      alert('Excellent Job!');
      this.formData = this.formDataService.resetFormData();
      this.isFormValid = false;
  }

}
