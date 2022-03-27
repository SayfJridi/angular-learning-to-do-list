import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  list: any[] = [{ id: 0, title: 'SAYF' }];
  constructor(private http: HttpClient) {
    this.getList();
  }

  ngOnInit(): void {}

  addItem(item: string) {
    this.http
      .post('http://localhost:3000/items', {
        id: this.list.length,
        title: item,
      })
      .subscribe((res) => {
        this.getList();
      });
  }

  getList() {
    return this.http
      .get('http://localhost:3000/items')
      .subscribe((res: any) => {
        this.list = res;
      });
  }
}
