import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeModule } from './app/joke/joke.module';
import { CoreModule } from './app/core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    JokeModule,
    CoreModule,
  ],
})
export class AppModule {
  constructor() { }
}
