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

  borderColor() {
    if (this.card().title === 'Supervisor') {
      return 'cyan-border';
    } else if (this.card().title === 'Team Builder') {
      return 'red-border';
    } else if (this.card().title === 'Karma') {
      return 'orange-border';
    }
    return 'blue-border';
  }
}
