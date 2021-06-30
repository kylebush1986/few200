import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { songCreated } from '../../actions/song.actions';
import { MusicState } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  form = this.formBuilder.group({
    title: ['', Validators.required],
    artist: ['', Validators.required],
    album: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private store: Store<MusicState>) { }

  get title() { return this.form.get('title'); }
  get artist() { return this.form.get('artist'); }
  get album() { return this.form.get('album'); }

  ngOnInit(): void {
  }

  submit(focusMe: HTMLInputElement) {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true })
      });
    } else {
      this.store.dispatch(songCreated({ payload: this.form.value }));
      this.form.reset();
      focusMe.focus(); // put the cursor there!
    }
  }
}
