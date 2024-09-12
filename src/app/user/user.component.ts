/**
 * Input -> Decorador
 * input -> Funcion especial
 */
import { Component, Input, Output, input, computed, signal, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  
  // Sin signal:

  /** 
   * ! -> Informamos de que esta variable se usara en algun momento, puede ser desde otro fichero.
   * : -> Le da un valor de tipo a la variable.
   * 
   * Creacion del objeto user
  */ 
   @Input({ required: true }) user!: User;
   @Input({ required: true }) selected!: boolean
   @Output() select = new EventEmitter();

  get imagePath() {
    return './assets/users/' + this.user.avatar
  }


  onSelectUser(){

    this.select.emit(this.user.id);

  }

}
