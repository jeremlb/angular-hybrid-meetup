import { Ng2StateDeclaration } from '@uirouter/angular';

import { AddJokeComponent } from './add-joke/add-joke.component';
import { EditJokeComponent } from './edit-joke/edit-joke.component';

export const states: Array<Ng2StateDeclaration> = [];

states.push({
  name: 'add-joke',
  url: '/add-joke',
  component: AddJokeComponent,
});

states.push({
  name: 'edit-joke',
  url: '/edit-joke/:id',
  component: AddJokeComponent,
});
