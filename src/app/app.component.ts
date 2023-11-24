import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PetApi } from './openapi/clients/petstore/api/pet.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
  constructor(private petApi: PetApi) {
    this.petApi.findPetsByStatus('available').subscribe((pets) => {
      pets.forEach((pet) => console.log(`Receive pet ${pet.name}`));
    });
  }
}
