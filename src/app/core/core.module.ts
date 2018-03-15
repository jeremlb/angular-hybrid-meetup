import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { JokesService } from './services/jokes.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    JokesService,
  ]
})
export class CoreModule { }
