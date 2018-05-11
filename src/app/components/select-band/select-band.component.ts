import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-select-band',
  templateUrl: './select-band.component.html',
  styleUrls: ['./select-band.component.css']
})
export class SelectBandComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToNext() {

    this.router.navigate(['/start']);
   }
}
