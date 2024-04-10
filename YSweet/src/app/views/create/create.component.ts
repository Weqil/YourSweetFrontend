import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { EMPTY, Subject, catchError, delay, of, retry, takeUntil, pipe } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent  implements OnInit {

  constructor(
    private categoriesService: CategoriesService
    ) { }
  categories:ICategory[] 
  ngOnInit() {
    this.categoriesService.getCategories().pipe().subscribe((res:any)=>{
      this.categories = res
      console.log(this.categories)
    })
  }
  changeCategory(event:any){
    console.log(event.target.files)
  }
}


