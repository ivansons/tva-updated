import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../../data/index';

@Component ({
    // tslint:disable-next-line:component-selector
    selector:     'mt-wizard-work',
    templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'What do you do?';
    workType: string;
    form: any;

    constructor() {
    }

    ngOnInit() {
    }

}

