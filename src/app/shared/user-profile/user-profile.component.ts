import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ CommonModule, MatIconModule ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Input() initials?: string; // Optional input for displaying initials
  @Input() src?: string;      // Optional input for displaying an image

  // Function to determine content based on input (optional)
  getContent() {
    if (this.src) {
      return 'image';
    } else if (this.initials) {
      return 'initials';
    } else {
      return 'default'; // Provide a default icon or placeholder here
    }
  }
}
