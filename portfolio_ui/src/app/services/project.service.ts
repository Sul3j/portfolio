import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProjectCard {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  technologies: string[];
  preview_url: string;
  github_url: string;
}

export interface ProjectImage {
  id: number;
  image: string;
  caption: string;
  order: number;
}

export interface ProjectDetail extends ProjectCard {
  content: string;
  images: ProjectImage[];
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectCard[]> {
    return this.http.get<ProjectCard[]>(`${this.apiUrl}/projects/`);
  }

  getProject(slug: string): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${this.apiUrl}/projects/${slug}/`);
  }
}
