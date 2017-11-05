import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent implements OnInit {

  public form;
  public showSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldPassword: this.formBuilder.control('', Validators.required, PasswordValidators.oldPasswordHasToMatch),
      newPassword: this.formBuilder.control('', Validators.required),
      confirmation: this.formBuilder.control('', [Validators.required, PasswordValidators.confirmationHasToMatch])
    })
  }

  public get oldPassword() {
    return this.form.get('oldPassword');
  }

  public get newPassword() {
    return this.form.get('newPassword');
  }

  public get confirmation() {
    return this.form.get('confirmation');
  }

  public changePassword() {
    this.showSuccess = true;
  }

  public isOldPasswordInvalid(){
    return (this.oldPassword.touched || this.oldPassword.dirty) && this.oldPassword.invalid;
  }

  public isNewPasswordInvalid() {
    return (this.newPassword.touched || this.newPassword.dirty) && this.newPassword.invalid;
  }

  public isConfirmationInvalid() {
    return (this.confirmation.touched || this.confirmation.dirty) && this.confirmation.invalid;
  }

}
