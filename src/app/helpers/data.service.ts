import { Injectable } from "@angular/core";
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private _http: Http) {
  }



  //SENSORS
  submitSensor(sensor:any){
    return this._http.post('/sensors/submit',sensor);
  }
  getSensors(){
    return this._http.post('/sensors',{});
  }
  deleteSensor(sensor:any){
    return this._http.post('/sensors/delete',sensor);
  }
  updateSensor(sensor:any){
    return this._http.post('/sensors/update',sensor);
  }
  getSensorData(sensor:any){
    return this._http.post('/sensors/data', sensor);
  }

}


