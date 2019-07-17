import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('password');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) 
            confirmPassword.setErrors({ passwordsShouldMatch: true });
        else
            return null;
    }
}