import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgModel, Validators, FormControl, RequiredValidator , ReactiveFormsModule} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HtmlTagDefinition } from '@angular/compiler';
import { Http } from '@angular/http';

import { LevelsService } from '../../services/index';
import { SliderComponent, UserNavComponent,  WelcomeComponent } from '../../components/index';

import { Start , FormDataService } from '../../data/index';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';



@Component({
  moduleId: module.id,
  selector: 'app-level',
  templateUrl: 'level.component.html',
  styleUrls: ['level.component.css'],
  providers: [LevelsService],
  exportAs: 'ngModel'
})

export class LevelComponent implements OnInit {

  levels: Levels[];
  levelsForm: FormGroup;
  start: string;
  form: any;


    constructor(private levelsService: LevelsService,
       private fb: FormBuilder,
        private router: Router,
         private formDataService: FormDataService) {
       this.levelsForm = fb.group({
          'start': new FormControl(),
          });

         this.levelsService.getLevels().subscribe(levels => {
            this.levels = levels;
             });
          } // end constructor


  ngOnInit() {
    this.start = this.formDataService.getStart();
    console.log('Level feature loaded!');
    }

  save(form: any): boolean {
      if (!this.levelsForm) {
          return false;
      }
      this.formDataService.setStart(this.start);
        return true;
    }

    goToNext(form: any) {

      console.log(
        this.formDataService.getStart
      );
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/choose']);
      }
  }

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}

