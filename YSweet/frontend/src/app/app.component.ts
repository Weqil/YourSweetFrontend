import { Component, OnInit } from '@angular/core';
// import { WebsocketService } from './services/websocket.service';
import { EMPTY, catchError, of } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    // public websocketService: WebsocketService,
    public loaderService:LoaderService
  ) {}
  loaderValue:boolean = this.loaderService.loaderShow
  ngOnInit() {
    // this.websocketService.subject.subscribe(value => {
    //   console.log(this.loaderValue)
      // value.next({m:"m"})
      // this.websocketService.messages.next({message:"m"})
    // })
    // this.websocketService.messages.subscribe(value => {
    //   console.log(value)
    //   // value.next({m:"m"})
    //   // this.websocketService.messages.next({message:"m"})
    // })
    // setTimeout(() => {
    //   this.websocketService.sendMessage({test: {bool: false, str: 'true'}})
    //   console.log('send')
    // }, 3000)
    // this.websocketService.sendMessage({messages: 'test'})
  }
}
