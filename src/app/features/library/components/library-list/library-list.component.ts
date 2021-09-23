import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { itemCheckedIn, itemCheckedOut } from '../../actions/library.actions';
import { LibraryListItem } from '../../models';
import { LibraryState, selectAllItems, selectCheckedIn, selectCheckedOut } from '../../reducers';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  items$!: Observable<LibraryListItem[]>
  constructor(private store: Store<LibraryState>) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectAllItems);
  }

  onChecked(item: LibraryListItem): void {
    if (item.isCheckedOut == false) {
      this.store.dispatch(itemCheckedOut({ id: item.id }))
    } else {
      this.store.dispatch(itemCheckedIn({ id: item.id }))
    }
  }

  showAll() {
    this.items$ = this.store.select(selectAllItems)
  }

  showCheckedIn() {
    this.items$ = this.store.select(selectCheckedIn)
  }

  showCheckedOut() {
    this.items$ = this.store.select(selectCheckedOut)
  }
}
