import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ItemEntity } from "../reducers/items.reducer";


@Injectable()
export class LibraryDataService {

  getItems(): Observable<ItemEntity[]> {
    return of([
      { id: '1', title: 'The Matrix', format: 'Movie', isCheckedOut: true },
      { id: '2', title: 'It', format: 'Book', isCheckedOut: false }
    ])
  }
}
