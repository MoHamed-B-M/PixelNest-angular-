import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AboutComponent {
  // IMPORTANT: Replace these placeholder URLs with your actual profile links!
  socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/MoHamed-B-M', 
      description: 'Explore my projects and code contributions.',
      color: 'var(--md-sys-color-on-surface)'
    },
    {
      name: 'Pinterest',
      icon: 'fab fa-pinterest',
      url: 'https://www.pinterest.com/1redphoenix/',
      description: 'Discover my visual inspirations and creative boards.',
      color: '#E60023'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/hama.ben.hamma',
      description: 'Follow my daily journey and visual stories.',
      color: '#E4405F'
    }
  ];
}