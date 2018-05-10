import { bufferToggle } from 'rxjs/operator/bufferToggle';
import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../../services/index';
import { SliderComponent, UserNavComponent, WelcomeComponent } from '../../components/index';
import { FormGroup, FormControl, Validators,
FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

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
  constructor(private knowledgeService: KnowledgeService,
    private fb: FormBuilder, private router: Router) {
      this.knowledgeService.getKnows().subscribe(knows => {
        this.knows = knows;
        console.log(knows);
      });

}



 ngOnInit( ) {


  this.riverTrekForm = this.fb.group({
    knows: this.fb.array([ this.treks() ])
  });
}

treks(): FormGroup {
  return this.fb.group({
    status: new FormControl({})
  });
}




// tslint:disable-next-line:member-ordering
status = true;
clickEvent() {
    this.status = !this.status; }

  onSubmit() {
console.log(this.riverTrekForm.value);
this.router.navigateByUrl('/map');
}

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
