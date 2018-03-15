import { Component, Input } from '@angular/core';
import { StateService } from '@uirouter/core';

import { Joke } from '../../core/models/joke.interface';

@Component({
  selector: 'edit-joke',
  templateUrl: './edit-joke.component.html',
  styleUrls: ['./edit-joke.component.less'],
})
export class EditJokeComponent {
  @Input() joke: Joke;

  constructor(private stateService: StateService) {}

  public onClick(): void { 
    this.stateService.go('edit-joke', { id: this.joke.id });
  }
}
