import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, RequiredValidator , ReactiveFormsModule} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HtmlTagDefinition } from '@angular/compiler';
import { Http } from '@angular/http';

import { LevelsService} from '../../services/index';
import {StageOne} from '../../services/levels-data-model';
import { SliderComponent, UserNavComponent,  WelcomeComponent } from '../../components/index';


@Component({
  moduleId: module.id,
  selector: 'app-level',
  templateUrl: 'level.component.html',
  styleUrls: ['level.component.css'],
  providers: [LevelsService]
})

export class LevelComponent implements OnInit {

  levels: Levels[];
  stagesone: StageOne;
  form: any;

  constructor(private levelsService: LevelsService,
     private fb: FormBuilder,
     private router: Router) {
      this.levelsService.getLevels().subscribe(levels => {
        this.levels = levels;
           });
    }
  ngOnInit() {
    this.stagesone = this.levelsService.getStageOne();
      console.log('Address feature loaded!');

    }
    save(form: any): boolean {
   if (!form.valid) {
          return false;
      }
      this.levelsService.setStageOne(this.stagesone);
      return true;
    }

    goToNext(form: any)  {
      if (this.save(form)) {
          // Navigate to the result page
         // this.router.navigate(['/choose']);
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

/*
export class LevelComponent implements OnInit {

  levels: Levels[];
  levelsForm: FormGroup;

  constructor(private levelsService: LevelsService,
     private fb: FormBuilder,
     private router: Router) {}
  ngOnInit() {

    this.levelsList();
  }



levelsList(): FormGroup {
  this.levelsService.getLevels().subscribe(levels => {
this.levels = levels;
   });
  this.levelsForm = this.fb.group ({
    name: new FormControl()
   });
return this.fb.group({
  name: ['']
});
}




  onSubmit() {

    console.log('Form Submitted!');
    this.router.navigateByUrl('/choose');
}

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
*/
