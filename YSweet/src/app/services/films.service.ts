import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFilm } from '../models/film';
import * as cors from 'cors';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private http: HttpClient ,
    // private header: HttpHeaders
  ) { 
    @CrossOrigin(origins = "http://localhost:3500")
  }

  getFilms() {
    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
    //   'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type'
    // });
    return this.http.get<any>(`http://localhost:3500/films`)
  }
}
