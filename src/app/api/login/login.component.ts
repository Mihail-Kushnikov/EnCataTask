import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserValidationService } from './user-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  hide = true;
  formControl: FormGroup;
  

  constructor(private userValidation: UserValidationService) { }

  ngOnInit() {
    this.formControl = new FormGroup({
      accaunt: new FormControl(null, [Validators.required, accValid],[this.nameAsyncValidator.bind(this)]),
      password: new FormControl('', [Validators.required]),
    });
    this.formControl.statusChanges.subscribe((status)=>console.log(status))

  }
  nameAsyncValidator(control: FormControl): Observable<ValidationErrors> {
    return this.userValidation.validateName(control.value);
  }
}
function accValid(formControl:FormControl):ValidationErrors {
  const value = formControl.value
  const hasEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value);
  const hasPhone = /[1-9]{12}/.test(value);
  const accauntValid = hasEmail || hasPhone;

  if(!accauntValid){
    return {invalids:'аккаунт'}
  }
  return null
}