import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LibraryListItem } from '../../models';
import { LibraryState, selectAllItems } from '../../reducers';

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

}
