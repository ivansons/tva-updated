import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Ages } from '../../data/formData.model';
import { FormDataService } from '../../data/index';



@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  title = 'How old are you?';
  ages: Ages;
  form: any;
  @Input() formData;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
      this.ages = this.formDataService.getAges();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      this.formDataService.setAges(this.ages);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/age']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the result page
          this.router.navigate(['/personal']);
      }
  }

}
