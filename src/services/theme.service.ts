
import { Injectable, signal } from '@angular/core';

// This is to inform TypeScript that a 'material' object exists on the global window scope
declare var material: any;

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal(true);
  sourceColor = signal('#9b59b6');

  initTheme() {
    // Check system preference on initial load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(prefersDark);
    this.updateTheme();

    // Listen for changes in system preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        this.isDark.set(event.matches);
        this.updateTheme();
    });
  }

  toggleTheme() {
    this.isDark.update(dark => !dark);
    this.updateTheme();
  }

  setSourceColor(color: string) {
    this.sourceColor.set(color);
    this.updateTheme();
  }

  private updateTheme() {
    if (typeof material === 'undefined' || !material.themeFromSourceColor) {
        console.error('Material Color Utilities library not loaded.');
        return;
    }

    const { argbFromHex, themeFromSourceColor, applyTheme } = material;
    const sourceColorArgb = argbFromHex(this.sourceColor());
    const theme = themeFromSourceColor(sourceColorArgb);
    
    applyTheme(theme, { target: document.body, dark: this.isDark() });
    document.body.classList.toggle('light', !this.isDark());
    document.body.classList.toggle('dark', this.isDark());
  }
}
