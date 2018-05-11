import { bufferToggle } from 'rxjs/operator/bufferToggle';
import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../../services/index';
import { SliderComponent, UserNavComponent, WelcomeComponent } from '../../components/index';
import { FormGroup, FormControl, Validators,
FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Journey , FormDataService } from '../../data/index';

@Component({
  moduleId: module.id,
  selector: 'app-river-trek-start',
  templateUrl: 'river-trek-start.component.html',
  styleUrls: ['river-trek-start.component.css'],
  providers: [KnowledgeService]
})
export class RiverTrekStartComponent implements OnInit {
  riverTrekForm: FormGroup;
  knows: Levels[];
  journey: string;
  form: any;
  constructor(private knowledgeService: KnowledgeService,
    private fb: FormBuilder, private router: Router, private formDataService: FormDataService) {
      this.knowledgeService.getKnows().subscribe(knows => {
        this.knows = knows;
        console.log(knows);
      });

      this.riverTrekForm = fb.group({
      journey: new FormControl(),

});
    }



 ngOnInit( ) {

  this.journey = this.formDataService.getJourney();
  console.log('Level feature loaded!');
 /*this.riverTrekForm = this.fb.group({
    knows: this.fb.array([ this.treks() ])
  });*/
}

/*treks(): FormGroup {
  return this.fb.group({
    status: new FormControl({})
  });*/

  save(form: any): boolean {
    if (!this.journey) {
        return false;
    }
    this.formDataService.setStart(this.journey);
      return true;
  }

  goToNext() {

 this.router.navigate(['/map']);
}
}


 /* onSubmit() {
console.log(this.riverTrekForm.value);
this.router.navigateByUrl('/map');
}*/

interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
