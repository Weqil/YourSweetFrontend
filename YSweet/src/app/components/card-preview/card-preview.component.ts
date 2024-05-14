import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
})
export class CardPreviewComponent  implements OnInit {

  constructor() { }
  @Input() name:string
  @Input() img:string

  ngOnInit() {}

}
