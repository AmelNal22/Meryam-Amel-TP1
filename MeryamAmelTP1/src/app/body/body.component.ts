import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  public color: string = ''
  public addItem(newItem:string){
    this.color = newItem;
  }
}
