import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

import { CoreModule } from '../core/core.module';

import { AddJokeComponent } from './add-joke/add-joke.component';
import { EditJokeComponent } from './edit-joke/edit-joke.component';

import { states } from './joke.states';


@NgModule({
  declarations: [
    AddJokeComponent,
    EditJokeComponent,
  ],
  entryComponents: [
    AddJokeComponent,
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
