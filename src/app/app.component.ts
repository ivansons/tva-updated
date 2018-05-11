import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response } from '@angular/http';
 import { WOW } from 'wowjs/dist/wow.min';
 import { FormDataService } from './data/formData.service';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() formData;

  constructor(private formDataService: FormDataService) {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + ' loaded!');
  }

}
