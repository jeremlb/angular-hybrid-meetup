import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { JokeModule } from './app/joke/joke.module';
import { CoreModule } from './app/core/core.module';

import AppNG1 from './app-ng1';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule,

    JokeModule,
    CoreModule,
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [AppNG1], { strictDi: true });
  }
}
