import { Component, OnInit } from '@angular/core';
import { TodoListItemViewModel } from 'src/app/models/todos.models';

@Component({
  selector: 'app-todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: TodoListItemViewModel[] = [
    { id: '1', description: 'Rake Leaves' },
    { id: '2', description: 'Wash Deck' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
