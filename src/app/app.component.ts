import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  opened = true;  // Sidenav toggle state

  sections = [
    { name: 'Profile', link: '#profile', icon: 'person' },
    { name: 'Resume', link: '#resume', icon: 'file_copy' },
    { name: 'Projects', link: '#projects', icon: 'code' },
    { name: 'Skills', link: '#skills', icon: 'build' },
    { name: 'Internship', link: '#internship', icon: 'work' },
    { name: 'Job Experience', link: '#job-experience', icon: 'business_center' },
    { name: 'Education', link: '#education', icon: 'school' },
    { name: 'Hobbies', link: '#hobbies', icon: 'sports_esports' },
    { name: 'Achievements', link: '#achievements', icon: 'star' },
  ];

  constructor(private router: Router){}
}
