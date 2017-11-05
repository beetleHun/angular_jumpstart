import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  public form;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      account: new FormGroup({
        'username': new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cannotContainSpace
          ],
          UsernameValidators.shouldBeUnique
        ),
        'password': new FormControl('', Validators.required)
      }),

    });
  }

  public get username() {
    return this.form.get('account.username');
  }

  public login() {
    this.form.get('account').setErrors({
      invalidLogin: true
    });
  }
}
