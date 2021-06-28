import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<{ item: string }>();

  form = this.formBuilder.group({
    item: ['', [Validators.required, Validators.minLength(2)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  get item() { return this.form.get('item'); }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.itemAdded.emit(this.form.value);
    }
  }

}
