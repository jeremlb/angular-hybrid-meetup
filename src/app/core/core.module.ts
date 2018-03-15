import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

import { JokesService } from './services/jokes.service';
import { UserServiceProvider } from './services/ajs-upgraded/user.service';

import * as angular from 'angular';
import CoreModuleNg1 from './core.module.js';

angular.module(CoreModuleNg1)
  .factory('JokesService', downgradeInjectable(JokesService));

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    JokesService,
    UserServiceProvider,
  ]
})
export class CoreModule { }
