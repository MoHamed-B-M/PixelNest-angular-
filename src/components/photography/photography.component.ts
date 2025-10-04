
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
})
export class PhotographyComponent {
  photos: Photo[] = [
    { id: 1, url: 'https://picsum.photos/id/1018/1000/600', author: 'Jane Doe', title: 'Mountain Majesty', tags: ['Landscape', 'Nature'], description: 'A breathtaking view of the mountains at dawn.' },
    { id: 2, url: 'https://picsum.photos/id/1015/1000/600', author: 'John Smith', title: 'Valley Fog', tags: ['Fog', 'Valley'], description: 'Misty morning fog rolling through a quiet valley.' },
    { id: 3, url: 'https://picsum.photos/id/1025/1000/600', author: 'Peter Pan', title: 'Loyal Companion', tags: ['Animal', 'Dog'], description: 'A cute dog enjoying the great outdoors.'},
    { id: 4, url: 'https://picsum.photos/id/1040/1000/600', author: 'Alice Wonderland', title: 'City Lights', tags: ['City', 'Night'], description: 'The vibrant nightlife of a bustling metropolis.'},
    { id: 5, url: 'https://picsum.photos/id/1043/1000/600', author: 'Clark Kent', title: 'Coastal Serenity', tags: ['Ocean', 'Coast'], description: 'Calm waves lapping against a serene coastline.'},
    { id: 6, url: 'https://picsum.photos/id/1050/1000/600', author: 'Bruce Wayne', title: 'Forest Path', tags: ['Forest', 'Path'], description: 'A tranquil path winding through a sun-dappled forest.' },
    { id: 7, url: 'https://picsum.photos/id/1062/1000/600', author: 'Diana Prince', title: 'Architectural Wonder', tags: ['Architecture', 'Modern'], description: 'Striking lines and shapes of modern architecture.'},
    { id: 8, url: 'https://picsum.photos/id/1074/1000/600', author: 'Barry Allen', title: 'Abstract Waves', tags: ['Abstract', 'Color'], description: 'A colorful abstract composition that evokes movement.'},
    { id: 9, url: 'https://picsum.photos/id/1080/1000/600', author: 'Arthur Curry', title: 'Morning Brew', tags: ['Coffee', 'Lifestyle'], description: 'A perfect cup of coffee to start the day.'}
  ];

  isModalVisible = signal(false);
  modalImageUrl = signal('');
  
  showDescription = signal<number | null>(null);

  openModal(url: string) {
    this.modalImageUrl.set(url);
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
  
  toggleDescription(id: number) {
    this.showDescription.update(current => (current === id ? null : id));
  }
}
