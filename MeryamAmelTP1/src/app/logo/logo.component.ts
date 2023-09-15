import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  public colors: string[] = ['red', 'green', 'blue', 'yellow'];

  @Output() changeColor = new EventEmitter();

  public addEvent(value : string) {
    this.changeColor.emit(value);
  }
}
