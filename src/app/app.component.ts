import { Component } from '@angular/core';
import { Person } from './Interfaces/Person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'divider';

  newPersonName: string = '';
  people: Person[] = [];
  total:number = 0;

  newItem: string = '';
  Itens: Person[] = [];

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

}
