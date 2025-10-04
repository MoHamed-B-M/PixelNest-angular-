

import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    main.HomePage > *,
    main.PhotographyPage > *,
    main.MusicPage > *,
    main.AboutPage > *,
    main.FeedbackPage > * {
      animation: route-enter 0.5s cubic-bezier(0.2, 0, 0, 1) forwards;
    }

    @keyframes route-enter {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, ScrollTopComponent],
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.initTheme();
  }

  getAnimationData(outlet: RouterOutlet): string | undefined {
    return outlet?.activatedRouteData?.['animation'];
  }
}