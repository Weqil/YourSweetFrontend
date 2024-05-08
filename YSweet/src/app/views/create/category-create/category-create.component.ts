import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent  implements OnInit {
  categories:ICategory
  categoriesForm:FormGroup
  categoriesChangeForm:FormGroup
  categoriesInput:any
  currentCategory:any = {
    name:"",
    id: ""
  }
  openModal:boolean = false
  constructor(
    private categoriesService:CategoriesService
  ) { }

  openModalFunc(event:any){
    this.openModal = !this.openModal
    console.log(event.target)
    this.currentCategory.name = event.target.name
    this.categoriesChangeForm.patchValue({
      name: this.currentCategory.name
    });
    this.currentCategory.id = event.target.id

  }
  closeModalFunc(){
    this.openModal = false
    this.getCategories()
  }
  changeCategory(){
    let categoryChangeBody = {
      "name":this.categoriesChangeForm.value.name
    }
    this.categoriesService.changeCategories(categoryChangeBody,this.currentCategory.id).pipe().subscribe((res)=>{
    })
    this.closeModalFunc()
  }

  removeCategory(){
    
    this.categoriesService.deleteCategories(Number(this.currentCategory.id)).pipe().subscribe((res)=>{
      console.log(res)
    })
    this.closeModalFunc()
  }

  getCategories(){
    this.categoriesService.getCategories().pipe().subscribe((res:any)=>{
      this.categories = res
    })
  }

  onSubmit(){
    this.categoriesService.deleteCategories(23)
    this.categoriesInput = this.categoriesForm.value.name
    let jsonName = {
      "name":this.categoriesInput
    }
    this.categoriesService.createCategories(jsonName).pipe().subscribe((res)=>{
      console.log(res)
    })
    this.getCategories()

  }

  ngOnInit() {
    this.categoriesForm = new FormGroup(
    {
      name:new FormControl('',[ Validators.required,Validators.minLength(3)])
    })
    this.categoriesChangeForm = new FormGroup({
      name:new FormControl('',[ Validators.required,Validators.minLength(3)])
    })

    this.getCategories()
  }


}
