import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { JokesService } from './services/jokes.service';
import { UserServiceProvider } from './services/ajs-upgraded/user.service';

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
