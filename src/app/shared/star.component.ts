import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  
  ngOnChanges(): void {
    this.starWidth = this.rating * 3 / 4;

    // console.log('ali')
  }
  onClick(){
    this.ratingClicked.emit(`The popularity rating is ${this.rating}/100`); //the emit method raises the event 
  }
}
