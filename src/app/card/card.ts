import { Component, Input, input } from '@angular/core';
import { Rol } from '../rol';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  card = input.required<Rol>();

  src = this.card().icon;
}
