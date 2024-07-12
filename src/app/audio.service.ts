import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playAudio(): void {
    const audio = new Audio();
    audio.src = '../../../assets/audio/moaning.mp3';
    audio.load();
    audio.play();
  }
}