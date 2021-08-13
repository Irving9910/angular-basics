import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  deletedHeroe:string = '';

  deleteHeroe(index:number) {
    this.deletedHeroe = this.heroes.splice(index,1)[0] || '';
  }
}
