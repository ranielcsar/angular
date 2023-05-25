import { Component, OnInit } from '@angular/core'
import { Hero } from './hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes = [] as Hero[]
  selectedHero?: Hero
  loading?: boolean
  randomSkip = Math.floor(Math.random() * 50)

  async ngOnInit() {
    this.loading = true
    const response =
      (await fetch(`https://dummyjson.com/users?limit=10&skip=${this.randomSkip}`)
        .then((res: Response) => res.json())
        .then((data) => data)) || []

    this.heroes = response.users.map((data: any) => ({
      id: data.id,
      name: data.firstName,
    })) as Hero[]
    this.loading = false
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
}
