import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { map } from 'rxjs/operators';

import { Joke } from "../models/joke.interface";

const JOKE_API_URL = '/assets/data/jokes.json';

@Injectable()
export class JokesService {
  private jokes: Array<Joke> = [];
  private isLoadedFromApi = false;

  constructor(private http: HttpClient) {}

  public save(joke: Joke): Observable<Joke> {
    if (!joke.id) {
      const lastId = this.lastId(this.jokes);
      joke.id = lastId + 1;
      this.jokes.push(joke);
    } else {
      this.replaceJoke(joke);
    }
    
    return of(joke);
  }

  public getAll(): Observable<Joke[]> {
    if (this.isLoadedFromApi) {
      return of(this.jokes);
    }

    return this.http.get<Joke[]>(JOKE_API_URL)
      .pipe(map((jokes: Joke[]): Joke[] => {
        this.isLoadedFromApi = true;
        this.jokes = this.jokes.concat(jokes);
        return this.jokes;
      }));
  }

  public get(id: number): Observable<Joke> {
    return this.getAll().pipe(map((jokes: Joke[]): Joke => {
      return jokes.find((joke: Joke): boolean => {
        return joke.id === id;
      });
    }));
  }

  private lastId(jokes: Array<Joke>): number {
    if (jokes.length > 0) {
      return jokes.sort((a: Joke, b: Joke): number => (a.id > b.id) ? -1 : 1)[0].id;
    }

    return 10;
  }

  private findJokeIndex(joke: Joke): number {
    return this.jokes.findIndex((element: Joke): boolean => element.id === joke.id);
  }

  private replaceJoke(joke: Joke): void {
    const index = this.findJokeIndex(joke);
    this.jokes.splice(index, 1, joke);
  }
}
