import { Component, Input, OnInit } from '@angular/core';
import { TodoListItemViewModel } from 'src/app/models/todos.models';

@Component({
  selector: 'app-todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items!: TodoListItemViewModel[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
