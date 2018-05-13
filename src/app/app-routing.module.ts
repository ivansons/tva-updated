import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {
  RiverTrekContentsComponent,
  LevelComponent,
  RiverTrekStartComponent,
  TrekContentsComponent,
  StartComponent,
  AreaComponent,
  SliderComponent,
  UserDashboard,
  SelectBandComponent,
  WelcomeComponent,
  UserNavComponent,
  MapComponent,
  WorkComponent,
  AgeComponent,
} from './components/index';

// User AuthGuard Components
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { WorkflowGuard, WorkflowService  } from './workflow/index';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';



const routes: Routes = [
  { path: '', component: LevelComponent},
  // { path: 'register',   redirectTo: '/age', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'level' , component: LevelComponent },
  { path: 'choose' , component: AreaComponent , canActivate: [AuthGuard]},
  { path: 'contents' , component: TrekContentsComponent , canActivate: [AuthGuard]},
  { path: 'start' , component: StartComponent , canActivate: [AuthGuard]},
  { path: 'trek-start' , component: RiverTrekStartComponent , canActivate: [AuthGuard]},
  { path: 'trek-content' , component: RiverTrekContentsComponent , canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent , canActivate: [AuthGuard]},
  { path: 'age', component: AgeComponent },
  { path: 'personal', component: PersonalComponent},
  { path: 'address', component: AddressComponent},
  { path: 'dashboard', component: UserDashboard},

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [WorkflowGuard],

exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
