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

  getFilms() {
    return this.http.get<IFilm[]>(`${environment.BACK_URL}:${environment.BACK_PORT}/films`)
  }
  addFilmsAvatar(data: any) {
    return this.http.post(`${environment.BACK_URL}:${environment.BACK_PORT}/films-avatar`, data )
  }
  addFilmsVideo(data: any) {
    return this.http.post(`${environment.BACK_URL}:${environment.BACK_PORT}/films-video`, data )
  }
  addFilms(data: any) {
    return this.http.post(`${environment.BACK_URL}:${environment.BACK_PORT}/films`, data )
  }
}
