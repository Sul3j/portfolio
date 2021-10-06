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
      title: 'e-commerce app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tellus vitae lobortis condimentum. Fusce efficitur eleifend quam id interdum. Ut nec lorem sapien. Nunc id magna aliquam, hendrerit diam eget, facilisis leo. Suspendisse massa ante, lobortis quis ex nec, laoreet tincidunt sem. Nam lobortis porta elit, sed tempor tortor laoreet eu.',
      code: '#',
      app: '#',
      yt: '#',
      tags: ['TypeScript', 'ASP.NET Core', 'C#', 'Angular', 'MySQL', 'SCSS'],
    },
    {
      title: 'chat app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tellus vitae lobortis condimentum. Fusce efficitur eleifend quam id interdum. Ut nec lorem sapien. Nunc id magna aliquam, hendrerit diam eget, facilisis leo. Suspendisse massa ante, lobortis quis ex nec, laoreet tincidunt sem. Nam lobortis porta elit, sed tempor tortor laoreet eu.',
      code: '#',
      app: '#',
      yt: '#',
      tags: ['TypeScript', 'ASP.NET Core', 'C#', 'Angular', 'MySQL', 'SCSS'],
    },
    {
      title: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tellus vitae lobortis condimentum. Fusce efficitur eleifend quam id interdum. Ut nec lorem sapien. Nunc id magna aliquam, hendrerit diam eget, facilisis leo. Suspendisse massa ante, lobortis quis ex nec, laoreet tincidunt sem. Nam lobortis porta elit, sed tempor tortor laoreet eu.',
      code: '#',
      app: '#',
      yt: '#',
      tags: ['TypeScript', 'ASP.NET Core', 'C#', 'Angular', 'MySQL', 'SCSS'],
    },
  ];
}
