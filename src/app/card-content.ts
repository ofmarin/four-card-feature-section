import { Injectable } from '@angular/core';
import {Rol} from "./rol"

@Injectable({
  providedIn: 'root',
})
export class CardContent {
  roles: Rol[] = [
    {
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      icon: 'images/icon-supervisor.svg',
    },
    {
      title: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      icon: 'images/icon-team-builder.svg',
    },
    {
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      icon: 'images/icon-karma.svg',
    },
    {
      title: 'Calculator',
      description: 'Uses data from past projects to provide better delivery estimates\n',
      icon: 'images/icon-calculator.svg',
    },
  ];

  getData(): Rol[] {
    return this.roles;
  }
}
