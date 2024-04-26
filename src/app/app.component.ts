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
    { name: 'Alice', cost: 0 },
    { name: 'Bob', cost: 0 },
    { name: 'Charlie', cost: 0 }
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


  addItem() {
    if (this.newItem !== '') {
      const newItem: Item = {
        name: this.newItem,
        price: this.price,
        guys: this.itemPeople
      }

      this.itemPeople.map(itemPeople => { console.log(this.itemPeople.length);
        this.people.map(person => {
          if (itemPeople === person.name) {
            if (this.itemPeople.length > 1) {
              person.cost += this.price / this.itemPeople.length
            } else {
              person.cost += this.price
            }
          }
        })
      });

      this.total += this.price;
      
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
