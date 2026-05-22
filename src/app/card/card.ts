import { Component, Input, input } from '@angular/core';
import { Rol } from '../rol';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  card = input.required<Rol>();

}
