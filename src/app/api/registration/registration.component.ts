import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;

  
  formControl: FormGroup;
  constructor() { }

  ngOnInit() {

    this.formControl = new FormGroup({
      accaunt: new FormControl(null, [Validators.required, accValid]),
      username: new FormControl('', [Validators.required,  ]),
      password: new FormControl('', [Validators.required,  ]),
    });
    this.formControl.statusChanges.subscribe((status)=>console.log(status))

  }
  
send(){
   console.log(this.formControl)
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



