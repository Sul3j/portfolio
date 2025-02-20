import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  public classes: string[] = [
    "devicon-django-plain", 
    "devicon-angular-plain", 
    "devicon-python-plain", 
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-nodejs-plain-wordmark",
    "devicon-nestjs-plain",
    "devicon-sass-plain",
    "devicon-docker-plain",
    "devicon-npm-original-wordmark",
    "devicon-figma-plain",
    "devicon-vscode-plain"
  ];
}
