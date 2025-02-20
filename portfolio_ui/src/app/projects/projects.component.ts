import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: "Rivendell",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident eveniet possimus commodi. Culpa enim sint commodi laudantium, sed quod dolorem accusantium possimus ea, ipsam odit quos in voluptatibus similique? In, dicta? Aspernatur, doloribus beatae nobis itaque illum dolor eum id.",
      technologies: [],
      preview: "",
      github: ""
    },
    {
      title: "Szybkie Kursiki",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident eveniet possimus commodi. Culpa enim sint commodi laudantium, sed quod dolorem accusantium possimus ea, ipsam odit quos in voluptatibus similique? In, dicta? Aspernatur, doloribus beatae nobis itaque illum dolor eum id.",
      technologies: [],
      preview: "",
      github: ""
    },
    {
      title: "Portfolio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident eveniet possimus commodi. Culpa enim sint commodi laudantium, sed quod dolorem accusantium possimus ea, ipsam odit quos in voluptatibus similique? In, dicta? Aspernatur, doloribus beatae nobis itaque illum dolor eum id.",
      technologies: [],
      preview: "",
      github: ""
    },
  ]
}
