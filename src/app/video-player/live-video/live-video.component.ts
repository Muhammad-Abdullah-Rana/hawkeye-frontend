import { Component } from '@angular/core';

@Component({
  selector: 'app-live-video',
  standalone: true,
  imports: [],
  templateUrl: './live-video.component.html',
  styleUrl: './live-video.component.scss'
})

export class LiveVideoComponent {
  protected videos: string[] = ["assets/v1.mp4", "assets/v2.mp4"];
}