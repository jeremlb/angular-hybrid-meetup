import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { JokesService } from './jokes.service';
import { Joke } from '../models/joke.interface';

const JOKE_API_URL = '/assets/data/jokes.json';

describe('JokeService', () => {
  let service: JokesService;
  let httpMock: HttpTestingController;
  let jokesFromApi: Array<Joke>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        JokesService,
      ],
    });
    service = TestBed.get(JokesService);
    httpMock = TestBed.get(HttpTestingController);

    jokesFromApi = [{ 
      id: 1,
      username: 'joke1 username',
      joke: 'joke1',
      anwser: 'joke1 anwser',
      category: 'joke1 category',
      avatar_src: 'joke1.png', 
      title: 'joke1 title'
    }, {
      id: 2,
      username: 'joke2 username',
      joke: 'joke2',
      anwser: 'joke2 anwser',
      category: 'joke2 category',
      avatar_src: 'joke2.png', 
      title: 'joke2 title'
    }];
  });

  it('should loads all the jokes from API', (done) => {
    service.getAll()
      .subscribe(
        (jokes: Joke[]) => {
          expect(JSON.stringify(jokes)).toEqual(JSON.stringify(jokesFromApi));
          done();
        },
        (error: any) => {
          done.fail(error);
        });
    httpMock.expectOne(JOKE_API_URL).flush(jokesFromApi);
    httpMock.verify();
  });

  it('should retrieve the requested joke', (done) => {
    (service as any).jokes = jokesFromApi;

    service.get(1).subscribe((joke: Joke) => {
      expect(joke.id).toEqual(1);
      expect(joke.joke).toEqual('joke1');
      done();
    });

    httpMock.expectOne(JOKE_API_URL).flush(jokesFromApi);
    httpMock.verify();
  });

  it('should create a new joke', (done) => {
    (service as any).jokes = [...jokesFromApi];
    (service as any).isLoadedFromApi = true;
    const newJoke: Joke = {
      username: 'joke3 username',
      joke: 'joke3',
      anwser: 'joke3 anwser',
      category: 'joke3 category',
      avatar_src: 'joke3.png', 
      title: 'joke3 title'
    };

    service.save(newJoke);

    service.getAll().subscribe((jokes: Joke[]) => {
      expect(jokes.length).toEqual(3);
      done();
    });
  });

  it('should save an existing joke', (done) => {
    const existingJoke: Joke = {
      id: 4,
      username: 'joke4 username',
      joke: 'joke4',
      anwser: 'joke4 anwser',
      category: 'joke4 category',
      avatar_src: 'joke4.png', 
      title: 'joke4 title'
    };

    (service as any).jokes = [...jokesFromApi, ...[existingJoke]];
    (service as any).isLoadedFromApi = true;

    existingJoke.title = 'joke91 title';
    service.save(existingJoke);

    service.getAll().subscribe((jokes: Joke[]) => {
      expect(jokes.length).toEqual(3);
      expect(jokes[2].title).toEqual('joke91 title');
      done();
    });
  });
});
