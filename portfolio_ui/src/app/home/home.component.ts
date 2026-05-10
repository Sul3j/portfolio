import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, TechnologiesComponent, ProjectsComponent, ContactComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-about></app-about>
    <app-technologies></app-technologies>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}
