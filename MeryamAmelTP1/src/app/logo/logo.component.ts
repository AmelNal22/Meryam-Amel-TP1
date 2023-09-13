import { Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent{
  public addItem(newItem:string){
    console.log(newItem);
    // @ts-ignore
    document.getElementById('logo').style.backgroundColor = newItem;
  }
}
