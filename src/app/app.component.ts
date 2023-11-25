import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PetApi } from './openapi/clients/petstore/api/pet.service';
import { Pet } from './openapi/clients/petstore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
  pets = signal<Pet[]>([]);
  constructor(private petApi: PetApi) {
    this.petApi.findPetsByStatus('available').subscribe((pets) => {
      this.pets.set(pets);
    });
  }
}
