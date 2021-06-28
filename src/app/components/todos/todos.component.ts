import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItemViewModel } from 'src/app/models/todos.models';
import { TodosDataService } from 'src/app/services/todos-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList$!: Observable<TodoListItemViewModel[]>;

  constructor(private service: TodosDataService) { }

  ngOnInit(): void {
    this.todoList$ = this.service.getData();
  }

  onItemAdded(thing: { item: string }) {
    this.service.addTodoItem({ description: thing.item });
  }
}
