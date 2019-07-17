import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from '../validators/password.validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  passwordForm: FormGroup;
  verificationFormGroup: FormGroup;

  get password() { return this.passwordForm.get('password') }

  get confirmPassword() { return this.passwordForm.get('confirmPassword') }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordForm = this._formBuilder.group({
      password: new FormControl('', {
        validators: [Validators.required]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    }, {validator: PasswordValidators.passwordsShouldMatch});
    this.verificationFormGroup = this._formBuilder.group({
      verificationCtrl: new FormControl('', {
        validators: [Validators.required]
      })
    });

    console.log(this.password)
    console.log(this.confirmPassword)
    
  }

  onSubmit(form) {
    console.log(form);
  }

}
