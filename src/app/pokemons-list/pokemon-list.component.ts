import { Component } from '@angular/core';
import { PokemonService } from '../../-service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {

  searchValue = "";

  constructor(
    public pokemonService: PokemonService,
  ) {
  }
}


