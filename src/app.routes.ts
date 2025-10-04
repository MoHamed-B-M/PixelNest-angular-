
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MusicComponent } from './components/music/music.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'Creative Suite - Home' },
  { path: 'photography', component: PhotographyComponent, title: 'Creative Suite - Photography' },
  { path: 'music', component: MusicComponent, title: 'Creative Suite - Music' },
  { path: 'feedback', component: FeedbackComponent, title: 'Creative Suite - Feedback' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
