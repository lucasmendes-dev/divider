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

  //People Values
  newPersonName: string = '';
  people: Person[] = [];
  total:number = 0;

  // Item values
  newItem: string = '';
  price: number = 0;
  itens: Item[] = [];
  itemPeople: any[] = [];

  tax: number = 0;

  public addPerson(): void {
    if (this.newPersonName !== '') {
      const newPerson: Person = {
        name: this.newPersonName,
        cost: 0
      }
      this.people.push(newPerson);
      this.newPersonName = ''
    }
  }

  public removePerson(index: number): void {
    this.people.splice(index, 1);
  }


  public addItem(): void {
    if (this.newItem !== '') {
      const newItem: Item = {
        name: this.newItem,
        price: this.price,
        guys: this.itemPeople
      }

      this.addItemPriceToPersonCost();

      this.total += this.price;
      this.itens.push(newItem);

      this.resetItemValues();
    }
  }

  public removeItem(index: number): void {
    this.total -= this.itens[index].price;

    this.removeItemPriceFromPersonCost(index);
    this.itens.splice(index, 1);
  }

  public onTaxChange(): void {
    const five: any[] = [];    //need implementation
    const ten: any[] = [];
    const fifteen: any[] = [];

    this.people.map(person => {
      person.cost += person.cost * this.tax;
    });
    this.total += this.total * this.tax;
  }

  public resetItemValues(): void {
    this.newItem = '';
    this.price = 0;
    this.itemPeople = []
  }

  public addItemPriceToPersonCost(): void {
    this.itemPeople.map(itemPeople => {
      this.people.map(person => {
        if (itemPeople === person.name) {
          if (this.itemPeople.length > 1) {
            person.cost += this.price / this.itemPeople.length
          } else {
            person.cost += this.price;
          }
        }
      })
    });
  }

  public removeItemPriceFromPersonCost(index: number): void {
    this.itens[index].guys.map(guy => {
      this.people.map(person => {
        if (guy === person.name) {
          if (this.itens[index].guys.length > 1) {
            person.cost -= this.itens[index].price / this.itens[index].guys.length;
          } else {
            person.cost -= this.itens[index].price;
          }
        }
      });
    });
  }

}
