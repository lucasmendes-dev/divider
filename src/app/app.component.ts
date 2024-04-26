import { Component } from '@angular/core';
import { Person } from './Interfaces/Person';
import { Item } from './Interfaces/Item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'divider';

  newPersonName: string = '';
  people: Person[] = [
    { name: 'Alice', cost: 250 },
    { name: 'Bob', cost: 300 },
    { name: 'Charlie', cost: 150 }
  ];
  total:number = 0;

  newItem: string = '';
  price: number = 0;
  itens: Item[] = [];
  itemPeople: any[] = [];
  

  addPerson() {
    if (this.newPersonName !== '') {
      const newPerson: Person = {
        name: this.newPersonName,
        cost: 0
      }
      this.people.push(newPerson);
      this.newPersonName = ''
    }
  }

  removePerson(index: number) {
    this.people.splice(index, 1);
  }


  addItem() { console.log(this.itemPeople);
    if (this.newItem !== '') {
      const newItem: Item = {
        name: this.newItem,
        price: this.price,
        guys: this.itemPeople
      }
      this.itens.push(newItem);
      this.newItem = '';
      this.price = 0;
    this.itemPeople = []
    }
  }

  removeItem(index: number) {
    this.itens.splice(index, 1);
  }

}
