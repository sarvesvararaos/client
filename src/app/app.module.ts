import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    SearchByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
