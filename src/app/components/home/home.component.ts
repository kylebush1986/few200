import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { TodosDataService } from 'src/app/services/todos-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberOfTodoItems$!: Observable<number>;
  count$!: Observable<number>;

  constructor(private service: TodosDataService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.numberOfTodoItems$ = this.service.getNumberOfTodoItems();
    this.count$ = this.store.select(s => s.counter.current);
  }

}
