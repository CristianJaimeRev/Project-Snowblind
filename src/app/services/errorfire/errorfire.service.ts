import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorfireService {

  constructor() { }

  
  errorfire(code:string){
    switch(code){

      case "auth/email-already-in-use":
        return "El usuario ya existe";

      case "auth/weak-password":
        return "Contraseña no válida";

      case "auth/invalid-email":
        return "Correo no válido";

      case "auth/wrong-password":
        return "la contraseña es Incorrecta";
  
      case "auth/internal-error":
        return "No ha puesto una contraseña";

      case "auth/user-not-found":
        return "El usuario no existe";

      default:
        return "Error desconocido";
    }
  }

}
