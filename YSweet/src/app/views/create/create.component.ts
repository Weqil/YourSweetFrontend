import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { EMPTY, Subject, catchError, delay, of, retry, takeUntil, pipe, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmsService } from 'src/app/services/films.service';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent  implements OnInit {
  constructor(
    private FilmsServise:FilmsService,
    private categoriesService:CategoriesService,
    private loaderService:LoaderService,
    private toastr: ToastrService,
    private router:Router
    ) { }
  categories:ICategory[]
  fileName:string = 'Файл не выбран'
  file:File
  filmForm:FormGroup
  filmFiles:FormData = new FormData()
  avatarPath:any = ''
  videoPath:any = ''
  avatarFile:any = ''
  videoFile:any = ''
  filePath:any = ''
  fileReader:any = new FileReader();
  createFilmForm: FormGroup

  changeCategory(event:any){
    this.createFilmForm.patchValue({
      category_id:event.target.value
    })
  }

  readerOnload(callback: ()=> void){
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload =()=>{
      this.filePath = reader.result as string;
      callback()
    };
 
  }

  changeFile(event:any, type){
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  
    if (type === 'avatar') {
      this.readerOnload(()=>{
        this.avatarFile = event.target.files[0]
        this.avatarPath = this.filePath
        console.log(this.avatarPath)
      })
    }
    if(type === 'video'){
      this.readerOnload(()=>{
      this.videoFile = event.target.files[0]
      this.videoPath = this.filePath
      console.log(this.videoPath)
      })
      
    }
  }


  onSubmit(){
      this.loaderService.show()
      this.FilmsServise.addFilmsAvatar(this.avatarFile).pipe(
        tap((res:any)=>{
          this.avatarPath = environment.BACK_URL+':'+environment.BACK_PORT+'/'+res.path
          this.createFilmForm.patchValue({
            avatar:this.avatarPath
          })
        })
      ).subscribe((res:any)=>{
          this.FilmsServise.addFilmsVideo(this.videoFile).pipe(
            tap((res:any)=>{
              this.videoPath = environment.BACK_URL+':'+environment.BACK_PORT+'/'+res.path
              this.createFilmForm.patchValue({
                video:this.videoPath
              })
            })
          ).subscribe((res:any)=>{
            console.log(this.createFilmForm.value)
            this.FilmsServise.addFilms(this.createFilmForm.value).pipe().subscribe((res)=>{
              this.loaderService.hide()
              this.toastr.success('Фильм создан');
              this.router.navigate([''])
            })
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
      video:new FormControl('',[Validators.required])
      
    })
  }
}


