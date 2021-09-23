import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { itemCreated } from '../../actions/library.actions';
import { LibraryState } from '../../reducers';

@Component({
  selector: 'app-library-entry',
  templateUrl: './library-entry.component.html',
  styleUrls: ['./library-entry.component.css']
})
export class LibraryEntryComponent implements OnInit {

  form = this.formBuilder.group({
    title: ['', Validators.required],
    format: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private store: Store<LibraryState>) { }

  get title() { return this.form.get('title'); }
  get format() { return this.form.get('artist'); }

  ngOnInit(): void {
  }

  submit(focusMe: HTMLInputElement) {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true })
      });
    } else {
      this.store.dispatch(itemCreated({ payload: this.form.value }));
      this.form.reset();
      focusMe.focus;
    }
  }
}
