import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IMarkers } from './map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MapService {

   private _mapUrl = 'http://dev-tenn-valley-d7.pantheonsite.io/views-datasource/content/river-stops';
   constructor(private _http: Http) {}

   getMarkers() { return this._http.get(this._mapUrl['']); }
}
