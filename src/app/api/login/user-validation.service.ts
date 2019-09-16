import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable()
export class UserValidationService {

 private accaunts: string[];

 constructor() {
  this.accaunts = ['375294444444', 'qwewq@mail.ru', 'qwe@gmail.ru'];
 }

 validateName(userName: string): Observable<ValidationErrors> {
  return new Observable<ValidationErrors>(observer => {
   const user = this.accaunts.find(accaunt => accaunt === userName);
   if (user) {
    observer.complete();
     observer.next({
      nameError: 'Пользователь с таким именем уже существует'
     });
    }

    observer.next(null);
    observer.complete();
   });
  }
}