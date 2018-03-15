import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toPromise } from 'rxjs/operator/toPromise';
import 'rxjs/add/operator/toPromise';

import { Joke } from '../../core/models/joke.interface';
import { JokesService } from '../../core/services/jokes.service';
import { StateService, Transition } from '@uirouter/core';
import { UserService } from '../../core/services/ajs-upgraded/user.service';

@Component({
  selector: 'add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.less'],
})
export class AddJokeComponent {
  joke: Joke;
  addJokeForm: FormGroup;
  categories: Array<string> = ['Animaux', 'Histoire drôle', 'Loi curieuse', 'Blague courte'];
  
  constructor(
    private stateService: StateService,
    private transition: Transition,
    private fb: FormBuilder,
    private jokeService: JokesService,
    private userService: UserService,
  ) {

    this.addJokeForm = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      joke: ['', Validators.required],
      anwser: [''],
    });

    if (stateService.current.name === 'edit-joke') {
      const jokeId = parseInt(transition.params().id, 10);
      
      jokeService.get(jokeId).subscribe((joke: Joke): void => {
        if (!joke) {
          return;
        }
        this.joke = joke;
        this.addJokeForm.get('category').setValue(joke.category);
        this.addJokeForm.get('title').setValue(joke.title);
        this.addJokeForm.get('joke').setValue(joke.joke);
        this.addJokeForm.get('anwser').setValue(joke.anwser);
      });
    }
  }

  public async onSubmit(joke: Joke): Promise<void> { 
    if (!this.joke) {
      const user = await this.userService.getLoggedUser();
      joke.username = user.username;
      joke.avatar_src = user.avatar;

      this.jokeService.save(joke);
    } else {
      this.jokeService.save(Object.assign(this.joke, joke));
    }
    
    this.stateService.go('home');
  }

  public getLabelName(): string {
    return (this.stateService.current.name === 'add-joke') ? 'Sauvegarder': 'Mettre à jour';
  }
}
