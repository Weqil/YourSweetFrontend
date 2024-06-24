import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
;
import * as cors from 'cors';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loaderShow:boolean = false
  show(){
    this.loaderShow = true
  }
  hide(){
    this.loaderShow = false
  }
}
