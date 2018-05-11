import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../services/index';
import { SliderComponent, UserNavComponent, WelcomeComponent  } from '../../components/index';
import { FormGroup, FormBuilder, FormControl, Form, FormArray, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Area , FormDataService } from '../../data/index';



@Component({
  moduleId: module.id,
  selector: 'app-area',
  templateUrl: 'area.component.html',
  styleUrls: ['area.component.css'],
  providers: [AreasService]
})

export class AreaComponent implements OnInit {
  areas: Areas;
  areaForm: FormGroup;
  choice: string;
  form: any;

  // tslint:disable-next-line:max-line-length
  constructor(private areasService: AreasService , private formDataService: FormDataService, private fb: FormBuilder, private router: Router) {
    this.areasService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
    this.areaForm = fb.group({
      'choice': new FormControl(),
      });
 }

  ngOnInit() {
    this.choice = this.formDataService.getArea();
    console.log('Area feature loaded!');
  }

  save(form: any): boolean {
    if (!this.areaForm) {
        return false;
    }
    this.formDataService.setArea(this.choice);
      return true;
  }

  goToNext(form: any) {

    console.log(
      this.formDataService.getArea
    );
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/contents']);
    }
}

}

interface Areas {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
