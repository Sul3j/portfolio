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
      description: "Strona internetowa firmy budującej domy drewniane umożliwia prezentację oferty oraz realizacji w nowoczesnej i przejrzystej formie. Wbudowany panel administracyjny pozwala na łatwe zarządzanie treścią, aktualizację galerii oraz statystyk. Dzięki responsywnemu designowi i optymalizacji, witryna zapewnia wygodną nawigację i skuteczne dotarcie do klientów.",
      technologies: ["Angular", "NestJS", "Bootstrap", "SCSS"],
      preview: "https://budownictwo-drewniane.com/",
      github: "https://github.com/Sul3j/rivendell-website"
    },
    {
      title: "Szybkie Kursiki",
      description: "Platforma edukacyjna umożliwiająca administratorowi zamieszczanie treści poprzez panel administracyjny, co ułatwia zarządzanie materiałami dydaktycznymi. Zawiera interaktywne quizy, przejrzyste materiały oraz stronę promocyjną, zapewniając kompleksowe wsparcie w procesie nauki. Projekt ten jest wykorzystywany w nauczaniu programowania i baz danych.",
      technologies: ["Django", "Bootstrap", "MySQL", "JavaScript"],
      preview: "https://szybkie-kursiki.pl/",
      github: "https://github.com/Sul3j/szybkie-kursiki"
    },
    {
      title: "Portfolio",
      description: "Moje portfolio to nowoczesna strona internetowa, prezentująca moje umiejętności oraz technologie, z których korzystam w pracy. Zawiera przejrzyste sekcje z projektami, opisem kompetencji oraz interaktywny formularz kontaktowy, umożliwiający łatwe nawiązanie współpracy. Dzięki nowoczesnemu designowi i intuicyjnej nawigacji portfolio wyróżnia się estetyką oraz funkcjonalnością.",
      technologies: ["Angular", "NestJS", "TypeScript", "SCSS"],
      preview: "https://szymonsulejczak.com/",
      github: "https://github.com/Sul3j/portfolio"
    },
  ]
}
