import { BehaviorSubject, Observable } from "rxjs";
import { TodoListItemViewModel } from "../models/todos.models";
import { map } from 'rxjs/operators';

export class TodosDataService {

  private data: TodoListItemViewModel[];
  private subject: BehaviorSubject<TodoListItemViewModel[]>;
  private id = 3;

  constructor() {
    this.data = [
      { id: '1', description: 'Wash cars' },
      { id: '2', description: 'Edge driveway' }
    ];

    this.subject = new BehaviorSubject<TodoListItemViewModel[]>(this.data);
  }

  getData(): Observable<TodoListItemViewModel[]> {
    return this.subject.asObservable();
  }

  addTodoItem(item: { description: string }) {
    const newItem: TodoListItemViewModel = {
      description: item.description,
      id: (this.id++).toString()
    };

    this.data = [newItem, ...this.data];
    this.subject.next(this.data);
  }

  getNumberOfTodoItems(): Observable<number> {
    return this.subject.asObservable().pipe(
      map(items => items.length)
    );
  }
}
