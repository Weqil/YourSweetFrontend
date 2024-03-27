import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FilmsService } from 'src/app/services/films.service';
import { QueryBuilderService } from 'src/app/services/query-builder.service';
import { IFilm } from 'src/app/models/film';
import { EMPTY, Subject, catchError, delay, of, retry, takeUntil } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent  implements OnInit {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private filmsService: FilmsService,
    private queryBuild: QueryBuilderService,
  ) { }

  films!: IFilm[] 

  getTopFilms() {
    this.filmsService.getFilms(this.queryBuild.queryBuilder('filmsForHome')).pipe(
      delay(100),
      retry(3),
      takeUntil(this.destroy$),
      catchError(err => {
        console.log(err)
        return of(EMPTY)
      }),
    ).subscribe((response: any) => {
        this.films = response
      })
  }

  ngOnInit() {
    this.getTopFilms()
  }

}
