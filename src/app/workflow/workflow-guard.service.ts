import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanLoad, Route
} from '@angular/router';

import { WorkflowService } from './workflow.service';

@Injectable()
export class WorkflowGuard implements CanActivate {
    constructor(private router: Router, private workflowService: WorkflowService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // tslint:disable-next-line:prefer-const
        let path: string = route.routeConfig.path;

        return this.verifyWorkFlow(path);
    }

    verifyWorkFlow(path): boolean {
        // tslint:disable-next-line:quotemark
        console.log("Entered '" + path + "' path.");

        // If any of the previous steps is invalid, go back to the first invalid step
        // tslint:disable-next-line:prefer-const
        let firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            // tslint:disable-next-line:quotemark
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            // tslint:disable-next-line:prefer-const
            let url = `/${firstPath}`;
            this.router.navigate([url]);
            return false;
        }

        return true;
    }
}


