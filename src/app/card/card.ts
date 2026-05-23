import { Component, input } from '@angular/core';
import { Rol } from '../rol';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  card = input.required<Rol>();

  borderColor(){

    if(this.card().title === "Supervisor"){
      return "cyan-border";
    }
    return;
  }
}
