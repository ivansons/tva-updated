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
  area: string;
  form: any;

  // tslint:disable-next-line:max-line-length
  constructor(private areasService: AreasService , private formDataService: FormDataService, private fb: FormBuilder, private router: Router) {
    this.areasService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
    this.areaForm = fb.group({
      'area': new FormControl(),
      });
 }

  ngOnInit() {
    this.area = this.formDataService.getStart();
    console.log('Area feature loaded!');
  }

}

interface Areas {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
