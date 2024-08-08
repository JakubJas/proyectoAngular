/**
 * Input -> Decorador
 * input -> Funcion especial
 */
import { Component, Input, Output, input, computed, signal, EventEmitter } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

/**
 * Cración de Alias
 * El alias se llama User en el que pondremos las variables id, name y avatar
 * El alias lo usaremos en el objeto Input user 
 */
type User = {
  id: string;
  name: string;
  avatar: string;
}

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //Con signal
  /** 
   * avatar = input.required<string>();
   * name = input.required<string>();

   * selectedUser = signal(DUMMY_USERS[randomIndex]);
   * imagePath = computed(() => 'assets/users/' + this.avatar());
  */
  
  // Sin signal:

  /** 
   * ! -> Informamos de que esta variable se usara en algun momento, puede ser desde otro fichero.
   * : -> Le da un valor de tipo a la variable.
   * 
   * Creacion del objeto user
  */ 
   @Input({required: true}) user!: User;
   @Output() select = new EventEmitter();

  get imagePath() {
    return './assets/users/' + this.user.avatar
  }


  onSelectUser(){
    
    /*const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    */

    this.select.emit(this.user.id);
  }

}
