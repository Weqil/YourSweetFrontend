import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(
    private filmService:FilmsService,
    private categoriesService:CategoriesService

  ) { }
  categories:any = []
  submitCategories(){
    this.categoriesService.getCategories().pipe().subscribe((res)=>{
      this.categories = res
    })
  }
  ngOnInit() {
    this.submitCategories()
  }

}
