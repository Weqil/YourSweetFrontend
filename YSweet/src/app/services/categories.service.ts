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
    private http:HttpClient
  ) { 

  }
  getCategories(){
   return this.http.get<ICategory[]>(`${environment.BACK_URL}:${environment.BACK_PORT}/categories`)
  }
  createCategories(category){
   return this.http.post<any>(`${environment.BACK_URL}:${environment.BACK_PORT}/categories`,category)
  }
  changeCategories(category, id){
    return this.http.post<any>(`${environment.BACK_URL}:${environment.BACK_PORT}/categories/rename?id=${id}`,category)
   }
   deleteCategories(id) {
    const url = `${environment.BACK_URL}:${environment.BACK_PORT}/categories?id=${id}`;
    console.log("URL:", url); // Проверяем URL перед отправкой запроса
    return this.http.delete(url);
}

}
