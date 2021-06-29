import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { ListComponent } from './components/todos/components/list/list.component';
import { EntryComponent } from './components/todos/components/entry/entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosDataService } from './services/todos-data.service';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CountByComponent } from './components/counter/count-by/count-by.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TodosComponent,
    ListComponent,
    EntryComponent,
    CounterComponent,
    CountByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    TodosDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
