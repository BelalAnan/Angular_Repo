import { Component, Input, EventEmitter,OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
 cropWidth:number=75;
@Input() rating:number=0;
  constructor() { }
@Output() rankchanged:EventEmitter<string>=new EventEmitter<string>();
  ngOnChanges(): void {
   this.cropWidth=this.rating*75/5
   
  }
  onclick():void
  {
    this.rankchanged.emit(`rating is ${this.rating}`);
  }
}
    