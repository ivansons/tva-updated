import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/index';
import { GeoJson } from '../../_models/index';
import { ActivatedRoute } from '@angular/router';
import { NgxMapboxGLModule, MapEvent} from 'ngx-mapbox-gl';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  nodes = '';

  constructor( private mapservice: MapService ) {}
  map: MapEvent; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)

  ngOnInit() {

 }

}
