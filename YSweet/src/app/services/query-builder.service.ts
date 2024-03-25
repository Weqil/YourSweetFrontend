import { Injectable } from '@angular/core';
import { tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryBuilderService {
  queryParams: Object = {};

  public paginationPageFilmsHome: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public paginationLimitFilmsHome: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  queryBuilder(page: string) {
    switch (page) {
      case 'filmsForHome': //Топ Фильмы для страницы /home 
        this.buildQueryFilmsForHome();
      break;
    }
    return this.queryParams;
  }

  buildQueryFilmsForHome() {
    this.queryParams = {
      page: this.paginationPageFilmsHome.value,
      limit: this.paginationLimitFilmsHome.value
    };
  }

  setPaginationPageFilmsHome(page: number) {
    this.paginationPageFilmsHome.next(page)
  }

  setPaginationLimitFilmsHome(limit: number) {
    this.paginationLimitFilmsHome.next(limit)
  }
}
