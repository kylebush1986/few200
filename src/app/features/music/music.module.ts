import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { SongsDataService } from './services/songs-data.service';
import { SongEffects } from './effects/song.effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'music',
    component: MusicComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'entry', component: EntryComponent }
    ]
  }
]

@NgModule({
  declarations: [
    MusicComponent,
    EntryComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppEffects, SongEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SongsDataService]
  // exports: [ListComponent] - this will let other modules use the ListComponent
})
export class MusicModule { }
