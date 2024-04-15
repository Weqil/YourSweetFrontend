import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent  implements OnInit {
  categories:any =[]
  categoriesForm:FormGroup
  categoriesInput:any
  constructor(
    private categoriesService:CategoriesService
  ) { }

  getCategories(){
    this.categoriesService.getCategories().pipe().subscribe((res:any)=>{
      this.categories = res
      console.log(res)
    })
  }

  onSubmit(){
    this.categoriesInput = this.categoriesForm.value.name
    let jsonName = {
      "name":this.categoriesInput
    }
    this.categoriesService.createCategories(jsonName).pipe().subscribe((res:any)=>{
      console.log(res)
    })
    this.getCategories()

  }

  ngOnInit() {
    this.categoriesForm = new FormGroup({
      name:new FormControl('',[ Validators.required,Validators.maxLength(3)])
    })
    this.getCategories()
  }


}
