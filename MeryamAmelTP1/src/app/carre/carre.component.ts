import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent{

  //red : string = 'red';
  //green : string = 'green';
  //blue : string = 'blue';
  //yellow : string = 'yellow';

  colors: string[] = ['red', 'green', 'blue', 'yellow'];

  @Input() color : string = '';
  @Output() changeColor = new EventEmitter();

  public addEvent(value : string) {
    this.changeColor.emit(value);
  }
}
