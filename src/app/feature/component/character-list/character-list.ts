import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../../core/services/CharacterService';
import { finalize } from 'rxjs';

// you can use shared models instead of duplicating the types
import { Characters } from '../../../core/models/characters';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styleUrls: ['./character-list.css'] // Cambié styleUrl por styleUrls (array)
})
export class CharacterList implements OnInit {

  pagenumber: number = 1;
  isloading: boolean = true;
  characters: Characters | undefined; // undefined para evitar errores

  constructor(private characterService: CharacterService) {}
  
  ngOnInit(): void {
    this.getCharacters();
  }
  
  getCharacters(): void {
    this.characterService
      .getCharacters(this.pagenumber)
      .pipe(
        finalize(() => this.isloading = false)
      )
      .subscribe({
        next: (response) => {
          this.characters = response;
          console.log('Respuesta recibida:', response);
        },
        error: (error) => {
          console.error('Error en la petición:', error);
        }
      });
  }
}