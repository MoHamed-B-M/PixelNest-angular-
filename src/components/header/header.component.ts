
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, CommonModule],
})
export class HeaderComponent {
  themeService = inject(ThemeService);

  onColorChange(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.themeService.setSourceColor(color);
  }
}
