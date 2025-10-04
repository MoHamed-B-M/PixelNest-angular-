
import { Component, ChangeDetectionStrategy, signal, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  genre: string;
  description: string;
  audioUrl: string;
  videoUrl: string;
  posterUrl: string;
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class MusicComponent implements AfterViewInit {
  @ViewChildren('audioPlayer') audioPlayers!: QueryList<ElementRef<HTMLAudioElement>>;

  tracks: Track[] = [
    { id: 1, title: 'Serene Morning', artist: 'Freelance Sounds', duration: '3:12', genre: 'Calm Ambient', description: 'A gentle and uplifting track, perfect for starting your day with focus and tranquility.', audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/21/audio_a1bf8900de.mp3', videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4', posterUrl: 'https://picsum.photos/id/211/600/400' },
    { id: 2, title: 'Deep Focus', artist: 'Zen Melodies', duration: '2:56', genre: 'Soft Piano', description: 'An immersive track designed for deep concentration, featuring soothing piano melodies.', audioUrl: 'https://cdn.pixabay.com/download/audio/2022/08/03/audio_51cf086939.mp3', videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4', posterUrl: 'https://picsum.photos/id/250/600/400' },
    { id: 3, title: 'Rainy Window', artist: 'Nature\'s Echo', duration: '3:44', genre: 'Nature Sounds', description: 'The calming sound of rain gently falling, perfect for relaxation or as a natural white noise.', audioUrl: 'https://cdn.pixabay.com/download/audio/2024/02/09/audio_a27c1a85a8.mp3', videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/360/Sintel_360_10s_1MB.mp4', posterUrl: 'https://picsum.photos/id/28/600/400' }
  ];

  playerState = new Map<number, { isPlaying: boolean; progress: number; isLooping: boolean }>();
  activePlayer: HTMLAudioElement | null = null;
  
  showDescription = signal<number | null>(null);

  constructor() {
    this.tracks.forEach(track => {
      this.playerState.set(track.id, { isPlaying: false, progress: 0, isLooping: false });
    });
  }

  ngAfterViewInit() {
    this.audioPlayers.forEach(playerRef => {
      const audio = playerRef.nativeElement;
      const trackId = parseInt(audio.dataset['trackId'] || '0', 10);

      audio.addEventListener('timeupdate', () => this.updateProgress(trackId, audio));
      audio.addEventListener('ended', () => this.handleTrackEnd(trackId, audio));
      audio.addEventListener('play', () => this.handlePlay(trackId, audio));
      audio.addEventListener('pause', () => this.handlePause(trackId, audio));
    });
  }

  togglePlay(trackId: number, video: HTMLVideoElement) {
    const audio = this.audioPlayers.find(p => parseInt(p.nativeElement.dataset['trackId'] || '0', 10) === trackId)?.nativeElement;
    if (!audio) return;
    
    if (audio.paused) {
        this.pauseAllOthers(audio);
        audio.play().catch(e => console.error("Audio play failed:", e));
        video.play().catch(e => console.error("Video play failed:", e));
    } else {
        audio.pause();
        video.pause();
    }
  }

  toggleLoop(trackId: number) {
    const state = this.playerState.get(trackId);
    if (state) {
        state.isLooping = !state.isLooping;
        this.playerState.set(trackId, { ...state });
        const audio = this.audioPlayers.find(p => parseInt(p.nativeElement.dataset['trackId'] || '0', 10) === trackId)?.nativeElement;
        if(audio) audio.loop = state.isLooping;
    }
  }

  seek(event: MouseEvent, trackId: number) {
    const audio = this.audioPlayers.find(p => parseInt(p.nativeElement.dataset['trackId'] || '0', 10) === trackId)?.nativeElement;
    if (!audio) return;
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percent = offsetX / rect.width;
    audio.currentTime = audio.duration * percent;
  }
  
  toggleDescription(id: number) {
    this.showDescription.update(current => (current === id ? null : id));
  }
  
  private pauseAllOthers(currentAudio: HTMLAudioElement) {
    this.audioPlayers.forEach(playerRef => {
      const audio = playerRef.nativeElement;
      if (audio !== currentAudio && !audio.paused) {
        audio.pause();
      }
    });
  }

  private updateProgress(trackId: number, audio: HTMLAudioElement) {
    const state = this.playerState.get(trackId);
    if (state && !isNaN(audio.duration)) {
      const progress = (audio.currentTime / audio.duration) * 100;
      this.playerState.set(trackId, { ...state, progress });
    }
  }

  private handlePlay(trackId: number, audio: HTMLAudioElement) {
    const state = this.playerState.get(trackId);
    if(state) {
      this.playerState.set(trackId, { ...state, isPlaying: true });
    }
  }
  
  private handlePause(trackId: number, audio: HTMLAudioElement) {
    const state = this.playerState.get(trackId);
    if(state) {
      this.playerState.set(trackId, { ...state, isPlaying: false });
    }
  }

  private handleTrackEnd(trackId: number, audio: HTMLAudioElement) {
    const state = this.playerState.get(trackId);
    if (state && !state.isLooping) {
      this.playerState.set(trackId, { ...state, isPlaying: false, progress: 0 });
    }
  }
}
