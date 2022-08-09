import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService {
  private emailsList: string[] = ['cristhian@miro.com', 'fabio@miro.com'];
  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor() {}

  addEmail(email: string) {
    if (email.match(this.emailPattern)) {
      console.log('Email Válido');
      if (this.emailsList.includes(email)) {
        console.log('Email ya existe');
      } else {
        this.emailsList.push(email);
      }
    } else {
      console.log('Email Inválido');
    }
  }

  validaEmail(email: String):boolean{
    if(email.match(this.emailPattern)){
      return true;
    }else{
      return false;
    }
  }

  deleteEmail(email: string) {
    this.emailsList = this.emailsList.filter((i) => i !== email);
    console.log(this.emailsList);
  }

  getEmails() {
    return this.emailsList;
  }
}
