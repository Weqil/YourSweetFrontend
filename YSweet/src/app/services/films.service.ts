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
  ) { }

  getFilms(params: any) {
    return this.http.get<IFilm[]>(`${environment.BACK_URL}:${environment.BACK_PORT}/films`, {params: params})
  }
}
