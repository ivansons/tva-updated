import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { TrekData, StageOne, StageTwo, StageThree } from './levels-data-model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow';

@Injectable()
export class LevelsService {
  private trekdata: TrekData = new TrekData();
  private isStageOneValid = false;
  private isStageTwoValid = false;
  private isStageThreeValid = false;
  constructor(private http: Http, private workflowService: WorkflowService) {

  }

  getLevels() {
    return this.http.get('http://dev-tennessee-river-valley.pantheonsite.io/tva-services/level-menu?_format=json')
    .map(res => res.json());
  }

getStageOne(): StageOne {
    const stageone: StageOne = {
    userLevel: this.trekdata.userLevel,
};
return stageone;
}

setStageOne(data: StageOne) {
  this.isStageOneValid = true;
    this.trekdata.userLevel = data.userLevel;
    this.workflowService.validateStep(STEPS.ages);
}

getStageTwo(): StageTwo {
  const stagetwo: StageTwo = {
  userArea: this.trekdata.userArea,
};
return stagetwo;
}

setStageTwo(data: StageTwo) {
  this.trekdata.userLevel = data.userArea;
}


getStageThree(): StageThree {
  const stageone: StageThree = {
  userPath: this.trekdata.userPath,
};
return stageone;
}

setStageThree(data: StageThree) {
 this.trekdata.userPath = data.userPath;
}


getTrekData(): TrekData {
  // Return the entire Form Data
  return this.trekdata;
}

}





