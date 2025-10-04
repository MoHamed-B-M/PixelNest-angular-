
import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface Photo {
  id: number;
  url: string;
  author: string;
  title: string;
  tags: string[];
  description: string;
}

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
})
export class PhotographyComponent implements OnInit {
  loading = signal(true);
  photos = signal<Photo[]>([]);
  skeletonItems = Array(9).fill(0);

  selectedPhoto = signal<Photo | null>(null);
  
  showDescription = signal<number | null>(null);

  ngOnInit() {
    // Simulate fetching data
    setTimeout(() => {
      this.photos.set([
        { id: 1, url: 'assets/images/photo1.jpg', author: 'Jane Doe', title: 'Mountain Majesty', tags: ['Landscape', 'Nature'], description: 'A breathtaking view of the mountains at dawn, with the sun casting a warm glow over the rugged peaks and deep valleys.' },
        { id: 2, url: 'assets/images/photo2.jpg', author: 'John Smith', title: 'Valley Fog', tags: ['Fog', 'Valley'], description: 'Misty morning fog rolling through a quiet valley, shrouding the trees and creating an ethereal, mysterious atmosphere.' },
        { id: 3, url: 'assets/images/photo3.jpg', author: 'Peter Pan', title: 'Loyal Companion', tags: ['Animal', 'Dog'], description: 'A cute dog enjoying the great outdoors, its fur ruffled by the wind as it looks out with bright, curious eyes.'},
        { id: 4, url: 'assets/images/photo4.jpg', author: 'Alice Wonderland', title: 'City Lights', tags: ['City', 'Night'], description: 'The vibrant nightlife of a bustling metropolis, captured in a dazzling display of colorful lights and streaking traffic trails.'},
        { id: 5, url: 'assets/images/photo5.jpg', author: 'Clark Kent', title: 'Coastal Serenity', tags: ['Ocean', 'Coast'], description: 'Calm waves lapping against a serene coastline under a soft, overcast sky, evoking a sense of peace and tranquility.'},
        { id: 6, url: 'assets/images/photo6.jpg', author: 'Bruce Wayne', title: 'Forest Path', tags: ['Forest', 'Path'], description: 'A tranquil path winding through a sun-dappled forest, inviting a peaceful walk among ancient trees and dappled light.' },
        { id: 7, url: 'assets/images/photo7.jpg', author: 'Diana Prince', title: 'Architectural Wonder', tags: ['Architecture', 'Modern'], description: 'Striking lines and geometric shapes of modern architecture, showcasing innovation and a bold aesthetic against a clear blue sky.'},
        { id: 8, url: 'assets/images/photo8.jpg', author: 'Barry Allen', title: 'Abstract Waves', tags: ['Abstract', 'Color'], description: 'A colorful abstract composition that evokes the movement of waves, with swirling patterns and a vibrant, dynamic energy.'},
        { id: 9, url: 'assets/images/photo9.jpg', author: 'Arthur Curry', title: 'Morning Brew', tags: ['Coffee', 'Lifestyle'], description: 'A perfect, steaming cup of coffee to start the day, with rich aroma and intricate latte art on its surface.'}
      ]);
      this.loading.set(false);
    }, 1500);
  }

  openModal(photo: Photo) {
    this.selectedPhoto.set(photo);
  }

  closeModal() {
    this.selectedPhoto.set(null);
  }
  
  toggleDescription(id: number) {
    this.showDescription.update(current => (current === id ? null : id));
  }
}