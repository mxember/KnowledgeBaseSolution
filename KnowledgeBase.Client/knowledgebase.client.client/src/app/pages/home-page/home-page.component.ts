import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  articles = [
    { id: 1, title: "Getting Started with the Knowledge Base", summary: "Learn how to use this platform" },
    { id: 2, title: "How to Add Articles", summary: "A step-by-step guide on creating articles." },
    { id: 3, title: "Managing Your Knowledge Base", summary: "Tips on organizing your content." }
  ]
}
