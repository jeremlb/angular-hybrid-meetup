import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { CoreModule } from '../core/core.module';

import { AddJokeComponent } from './add-joke/add-joke.component';
import { EditJokeComponent } from './edit-joke/edit-joke.component';

import { states } from './joke.states';

import * as angular from 'angular';
import JokeModuleNG1 from './joke.module.js';

angular.module(JokeModuleNG1)
  .directive('editJoke', downgradeComponent({ component: EditJokeComponent }));


@NgModule({
  declarations: [
    AddJokeComponent,
    EditJokeComponent,
  ],
  entryComponents: [
    AddJokeComponent,
    EditJokeComponent,
  ],
  imports: [
    HttpClientModule,
    UIRouterModule.forChild({ states }),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    CoreModule,
  ]
})
export class JokeModule { }
