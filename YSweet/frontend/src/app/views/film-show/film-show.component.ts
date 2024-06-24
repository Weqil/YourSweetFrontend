import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
@Component({
  selector: 'app-film-show',
  templateUrl: './film-show.component.html',
  styleUrls: ['./film-show.component.scss'],
})
export class FilmShowComponent  implements OnInit {
  
  constructor(
    private route:ActivatedRoute,
    private filmService:FilmsService
  ) { }
  id:string = this.route.snapshot.params['id']
  video:any = ''
  film:any
  test(){
    console.log('hi')
  }
  ngOnInit() {
    this.filmService.getFilmsById(this.id).pipe().subscribe((res)=>{
      this.video = res[0].video
      this.film = res[0]
      console.log(this.film)
    })
  }

}
