import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public addItem(newItem:string){
    // @ts-ignore
    document.getElementById('body').style.backgroundColor = newItem;
  }
}
