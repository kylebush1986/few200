import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ItemEntity } from "../reducers/library.reducer";


@Injectable()
export class LibraryDataService {

  getLibrary(): Observable<ItemEntity[]> {
    return of([
      { _id: '1', title: 'The Matrix', format: 'Movie', isCheckedOut: true },
      { _id: '2', title: 'It', format: 'Book', isCheckedOut: false }
    ])
  }
}
