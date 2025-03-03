import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProfessionalExperienceComponent } from './pages/professional-experience/professional-experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Material modules
import { MatTabsModule } from '@angular/material/tabs';  // For tabs
import { MatSidenavModule } from '@angular/material/sidenav';  // For sidenav
import { MatIconModule } from '@angular/material/icon';  // For icons
import { MatListModule } from '@angular/material/list';
import { ProjectDescriptionComponent } from './project-description/project-description.component'; // For Lists

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeUploadComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ProfessionalExperienceComponent,
    ContactComponent,
    ResumeComponent,
    ProjectDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
