import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { ProjectService, ProjectDetail } from '../../services/project.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownComponent, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | null = null;
  loading = true;
  error = false;
  activeImage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.projectService.getProject(slug).subscribe({
      next: (data) => {
        this.project = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  openLightbox(imageUrl: string): void {
    this.activeImage = imageUrl;
  }

  closeLightbox(): void {
    this.activeImage = null;
  }
}
