import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent{

  red : string = 'red';
  green : string = 'green';
  blue : string = 'blue';
  yellow : string = 'yellow';

  @Input() color : string = '';
  @Output() event = new EventEmitter();

  public addEvent(value : string) {
    this.event.emit(value);
  }
}
