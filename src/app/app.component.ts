import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import {Howl} from 'howler';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Korrigiert: styleUrl -> styleUrls
})
export class AppComponent {
  title = 'jumpscare';

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    const dialogText = 'Do you really want to leave this site?';
    $event.returnValue = dialogText;
  }

  onButtonClick(): void {
    console.log("clicked");
    const mainElement = document.getElementById("main") as HTMLElement;
    const scareElement = document.getElementById("scare") as HTMLElement;
    mainElement.style.display = "none";
    scareElement.style.display = "block";
    document.documentElement.requestFullscreen();
    let sound = new Howl({
      html5: true,
      loop: true,
      volume: 5,
      src: ['moaning.mp3']
        });

     sound.play()
  }
}