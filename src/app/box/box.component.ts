import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  public title: string = 'Here, our priority is you';
  public text: string = 'A bank with prizes and always with news for you';

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }
}
