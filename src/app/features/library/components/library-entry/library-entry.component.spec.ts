import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryEntryComponent } from './library-entry.component';

describe('LibraryEntryComponent', () => {
  let component: LibraryEntryComponent;
  let fixture: ComponentFixture<LibraryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
