import { MessageService } from "./message.service";
import { Hero } from "./../interfaces/hero";
import { Injectable } from "@angular/core";
import { HEROES } from "../mock/mock-heroes";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id));
  }
}
