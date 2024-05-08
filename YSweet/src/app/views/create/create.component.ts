import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { EMPTY, Subject, catchError, delay, of, retry, takeUntil, pipe, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmsService } from 'src/app/services/films.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent  implements OnInit {
  constructor(
    private FilmsServise:FilmsService,
    private categoriesService:CategoriesService
    ) { }
  categories:ICategory[]
  fileName:string = 'Файл не выбран'
  file:File
  filmForm:FormGroup
  filmFiles:FormData = new FormData()
  avatarPath:any = ''

  createFilmForm: FormGroup

  changeCategory(event:any){
    this.createFilmForm.patchValue({
      category_id:event.target.value
    })
  }

  changeFile(event:any, type){
    if(type == 'avatar'){
      this.file = event.target.files[0]
      this.fileName = event.target.files[0].name
   
    }
  }


  onSubmit(){
    
      this.FilmsServise.addFilmsAvatar(this.file).pipe(
        tap((res:any)=>{
          this.avatarPath = environment.BACK_URL+':'+environment.BACK_PORT+'/'+res.path
          this.createFilmForm.patchValue({
            avatar:this.avatarPath
          })
        })
      ).subscribe((res:any)=>{
        this.FilmsServise.addFilms(this.createFilmForm.value).pipe().subscribe((res)=>{
          console.log(this.createFilmForm.value)
        })
        
     })

   
  }

  ngOnInit() {
    this.categoriesService.getCategories().pipe().subscribe((res:any)=>{
      this.categories = res
    })
    this.createFilmForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      category_id:new FormControl('',[ Validators.required]),
      data_created:new FormControl('',[ Validators.required, Validators.minLength(3)]),
      description:new FormControl('',[ Validators.required, Validators.minLength(3)]),
      author:new FormControl('',[ Validators.required, Validators.minLength(3)]),
      admin_id:new FormControl('1'),
      avatar:new FormControl('',[ Validators.required]),
      
    })
  }
}


