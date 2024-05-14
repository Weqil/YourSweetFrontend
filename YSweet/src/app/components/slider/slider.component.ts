import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {
  constructor(private FilmsService:FilmsService){
  }
  count:any = 0
  @ViewChild('sliderMain', {read: ElementRef}) sliderMain: ElementRef;
  @Input() filmArray = ''
  back(): void{
      if(this.count == 0){
        this.count =  -60*2
        this.sliderMain.nativeElement.style.marginLeft = this.count +"rem"
      }else{
        this.count += 60
        console.log(this.count) 
        this.sliderMain.nativeElement.style.marginLeft = this.count +"rem"
      } 
     
  }
  next(){
    if(this.count == 0){
      this.count -= 60
      console.log(this.count)
      this.sliderMain.nativeElement.style.marginLeft = this.count +"rem"
  }
  else if(this.count !== -2 * 60){
    console.log(this.count)
      this.count -= 60
      this.sliderMain.nativeElement.style.marginLeft = this.count +"rem"
  }else{
    this.count = 0
    this.sliderMain.nativeElement.style.marginLeft = this.count +"rem"
  }
  
     
  }

  ngOnInit() {
    let test
    
  }

}
