import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryEntryComponent } from './components/library-entry/library-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      { path: 'library-list', component: LibraryListComponent },
      { path: 'library-entry', component: LibraryEntryComponent }
    ]
  }
]

@NgModule({
  declarations: [
    LibraryComponent,
    LibraryListComponent,
    LibraryEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //StoreModule.forFeature(featureName, reducers),
  ]
})
export class LibraryModule { }
