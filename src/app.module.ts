import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { JokeModule } from './app/joke/joke.module';
import { CoreModule } from './app/core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule,
    UIRouterUpgradeModule,

    JokeModule,
    CoreModule,
  ],
})
export class AppModule {
  constructor() { }

  ngDoBootstrap() {}
}
