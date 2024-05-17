import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent  implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private filmService:FilmsService,
    private categoriesService:CategoriesService
  ) { }
  routValue:any = this.route.snapshot.params['param']
  films:any = []
  filmsNew:any = []
  filmsGenre:any = []
  category:any 
  
  getCategory(){
    this.categoriesService.getCategoriesById(this.routValue).pipe().subscribe((res)=>{
      this.category = res[0]
      console.log(this.category)
    })
  }

  allFilm(){
    this.filmService.getFilms().pipe().subscribe((res)=>{
      res.forEach((film)=>{
        this.films.push(film)
      })
    })
  }

  allFilmsGenre(){
    if(this.routValue !== 'new' && this.routValue !== 'main'){
      this.getCategory()
      this.filmService.getFilmsByCategory(this.routValue).pipe().subscribe((res)=>{
        res.forEach((film)=>{
          this.filmsGenre.push(film)
          
        })
      })
    }
  }

  ngOnInit() {
    this.allFilm()
    this.allFilmsGenre()
    console.log(this.routValue)
  }

}
