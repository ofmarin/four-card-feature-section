import { Component, computed, input, Signal } from '@angular/core';
import { Rol } from '../rol';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  card = input.required<Rol>();
  borderColor = computed(() =>
  {
    if (this.card().title === 'Supervisor') {
      return 'cyan-border';
    } else if (this.card().title === 'Team Builder') {
      return 'red-border';
    } else if (this.card().title === 'Karma') {
      return 'orange-border';
    }
    return 'blue-border';
  });


}
