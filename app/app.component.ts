import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource: MyDataSource;

  isDescriptionRow = (index, item) => item.description;

  constructor() {
    this.dataSource = new MyDataSource();
    this.dataSource.setData(DATA);
  }
}

const DATA = [
  { data: 'ABC', id: 1, description: 'Blah blah info about ABC' },
  { data: 'DEF', id: 2, description: 'Blah blah info about DEF' },
  { data: 'GHI', id: 3, description: 'Blah blah info about GHI' },
  { data: 'JKL', id: 4, description: 'Blah blah info about JKL' },
  { data: 'MNO', id: 5, description: 'Blah blah info about MNO' },
]

class MyDataSource implements DataSource<any> {

  data = new BehaviorSubject<any>([]);

  setData(vals: any[]) {
    const splitVals = [];

    vals.forEach(v => {
      splitVals.push({data: v.data, id: v.id});
      splitVals.push({description: v.description});
    });

    this.data.next(splitVals);
  }

  /** Simple stream */
  connect() {
    return this.data;
  }

  /** Noop */
  disconnect() { }
}
