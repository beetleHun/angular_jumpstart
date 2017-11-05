import {AbstractControl, ValidationErrors} from '@angular/forms';
export class PasswordValidators {

  public static oldPasswordHasToMatch(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value != '1234') {
          resolve({oldPasswordsDoNotMatch: 'true'})
        } else {
          resolve(null);
        }
      }, 1000)
    });
  }

  public static confirmationHasToMatch(control: AbstractControl): ValidationErrors | null {
    if (control && control.parent && control.value != control.parent.get('newPassword').value) {
      return {confirmationIncorrect: true};
    }
    return null;
  }
}
