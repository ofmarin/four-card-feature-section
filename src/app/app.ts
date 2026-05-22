import { Component, signal, inject, input, InputSignal } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import {Card} from './card/card'
import {CardContent} from './card-content'
import { Rol } from './rol';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('four-card-feature-section');
  cardContent: CardContent = inject(CardContent);
  roles : Rol[] = this.cardContent.getData();

}
