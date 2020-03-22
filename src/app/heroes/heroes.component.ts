import { MessageService } from "./../services/message.service";
import { Hero } from "./../interfaces/hero";
import { HeroService } from "./../services/hero.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
