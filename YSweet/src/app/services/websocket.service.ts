import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, map} from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() {
    this.connect()

    // this.messages = <Subject<Object>>(
    //   this.connect().pipe(map((response: MessageEvent): Object => {
    //     let content = JSON.parse(response.data);
    //     console.log(content)
    //     return {
    //       user: content.user,
    //       messageContent: "asdasd",
    //     };
    //   }))
    // );
   }

  public subject: Subject<MessageEvent>
  private wsc!:  any;
  public messages: Subject<Object>;
  private wsUrl: String = `${environment.BACK_WS_URL}:${environment.BACK_PORT}`


  public connect(): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(this.wsUrl);
      console.log('Successfully connected To: ' + this.wsUrl);
    }
    return this.subject;
  }

  public sendMessage(message: Object): void {
    // console.log(this.wsc)
    if (this.wsc) {
      if (this.wsc.readyState === WebSocket.OPEN) {
        this.wsc.send(JSON.stringify(message));
      }
    }
  }

  private create(url): Subject<MessageEvent> {
    let wsc = new WebSocket(url);
    let observable = Observable.create((obs: Observer<MessageEvent>) => {
      wsc.onmessage = obs.next.bind(obs);
      wsc.onerror = obs.error.bind(obs);
      wsc.send
      wsc.onclose = obs.complete.bind(obs);
      return wsc.close.bind(wsc);
    });
    let observer = {
      next: (data: Object) => {
        if (wsc.readyState === WebSocket.OPEN) {
          wsc.send(JSON.stringify(data));
        }
      },
    };
    this.wsc = wsc
    return Subject.create(observer, observable);
  }
}
