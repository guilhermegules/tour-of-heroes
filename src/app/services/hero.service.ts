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
    // TODO: send the message _after_fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
