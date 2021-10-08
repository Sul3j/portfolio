import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: any[] = [
    {
      title: 'project_title_first',
      description: 'project_description_first',
      code: '#',
      app: '#',
      yt: '#',
      tags: ['TypeScript', 'ASP.NET Core', 'C#', 'Angular', 'MySQL', 'SCSS'],
    },
    {
      title: 'project_title_second',
      description: 'project_description_second',
      code: '#',
      app: '#',
      yt: '#',
      tags: ['TypeScript', 'ASP.NET Core', 'C#', 'Angular', 'MySQL', 'SCSS'],
    },
    {
      title: 'project_title_third',
      description: 'project_description_third',
      code: '#',
      app: '#',
      yt: '#',
      tags: ['TypeScript', 'ASP.NET Core', 'C#', 'Angular', 'MySQL', 'SCSS'],
    },
  ];
}
