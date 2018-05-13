import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response } from '@angular/http';
 import { WOW } from 'wowjs/dist/wow.min';
 import { LevelsService} from './services/index';
import { TrekData } from './services/levels-data-model';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() trekData;
  title = 'app';
  constructor(private levelsService: LevelsService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.trekData = this.levelsService.getTrekData();
  }

}
