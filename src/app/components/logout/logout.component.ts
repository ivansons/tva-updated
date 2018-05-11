import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../../home/home.component';
import { AlertService, AuthenticationService } from '../../services/index';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
constructor( private authenticationService: AuthenticationService, ) {

  }
  ngOnInit() {
    this.authenticationService.logout();
  }
}



