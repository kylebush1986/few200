import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countBySet } from 'src/app/actions/counter.actions';
import { AppState, selectCountingBy } from 'src/app/reducers';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css']
})
export class CountByComponent implements OnInit {

  countingBy$!: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countingBy$ = this.store.select(selectCountingBy)
  }

  setCountBy(by: number) {
    this.store.dispatch(countBySet({ by }))
  }
}
