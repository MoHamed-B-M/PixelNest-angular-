
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'Creative Suite - Home', data: { animation: 'HomePage' } },
  { 
    path: 'photography', 
    loadComponent: () => import('./components/photography/photography.component').then(c => c.PhotographyComponent), 
    title: 'Creative Suite - Photography', 
    data: { animation: 'PhotographyPage' } 
  },
  { 
    path: 'music', 
    loadComponent: () => import('./components/music/music.component').then(c => c.MusicComponent), 
    title: 'Creative Suite - Music', 
    data: { animation: 'MusicPage' } 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent), 
    title: 'Creative Suite - About Me', 
    data: { animation: 'AboutPage' } 
  },
  { 
    path: 'feedback', 
    loadComponent: () => import('./components/feedback/feedback.component').then(c => c.FeedbackComponent), 
    title: 'Creative Suite - Feedback', 
    data: { animation: 'FeedbackPage' } 
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];