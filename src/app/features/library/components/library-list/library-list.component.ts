import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LibraryItem } from '../../models';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  items$!: Observable<LibraryItem[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectLibraryItems);
  }

}
