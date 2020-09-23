import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/interfaces'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }

  submit(){

    if(this.loginForm.invalid){
      return
    }

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    console.log(user);
    

  }
}
