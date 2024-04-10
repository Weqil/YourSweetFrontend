import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/category';
import * as cors from 'cors';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private hhtp:HttpClient
  ) { 

  }
  getCategories(){
   return this.hhtp.get<ICategory[]>(`${environment.BACK_URL}:${environment.BACK_PORT}/categories`)
  }
}
