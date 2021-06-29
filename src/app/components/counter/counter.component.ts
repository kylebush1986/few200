import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countDecremented, countIncremented, countReset } from 'src/app/actions/counter.actions';
import { AppState, selectCounterCurrent, selectCounterResetDisabled, selectDecrementDisabled } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$!: Observable<number>;
  counterResetDisabled$!: Observable<boolean>;
  decrementDisabled$!: Observable<boolean>;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrent);
    this.counterResetDisabled$ = this.store.select(selectCounterResetDisabled);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
  }

  increment() {
    this.store.dispatch(countIncremented());
  }

  decrement() {
    this.store.dispatch(countDecremented());
  }

  reset() {
    this.store.dispatch(countReset());
  }

}
