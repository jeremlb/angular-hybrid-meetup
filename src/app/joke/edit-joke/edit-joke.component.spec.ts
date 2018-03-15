import { Injector } from '@angular/core';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EditJokeComponent } from './edit-joke.component';
import { StateService } from '@uirouter/core';
import { Joke } from '../../core/models/joke.interface';

describe('EditJokeComponent', () => {
  let joke: Joke;
  let component: EditJokeComponent;
  let fixture: ComponentFixture<EditJokeComponent>;
  let injector: Injector;
  let service: StateService;

  const mockStateService = {
    go(state: string, params: object): void {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditJokeComponent,
      ],
      providers: [
        {
          provide: StateService,
          useValue: mockStateService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditJokeComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(StateService);

    joke = {
      id: 1,
      username: 'toto',
      title: 'the joke',
      joke: 'hello',
      anwser: 'world',
      category: 'blabla',
      avatar_src: 'blabla.jpg',
    };

    component.joke = joke;
  }));

  it('should call stateservice on click', () => {
    const spyStateService = spyOn(service, 'go').and.callThrough();
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.edit-joke-link')).nativeElement.click();
    fixture.detectChanges();
    expect(spyStateService).toHaveBeenCalledWith('edit-joke', { id: 1 });
  });
});
