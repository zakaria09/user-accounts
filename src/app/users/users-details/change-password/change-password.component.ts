import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  loading = false;
  success: Boolean;
  name: string;
  error: boolean = false;

  constructor(
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public passedData: any
    ) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      newPassword: new FormControl('', {validators: [Validators.required]})
    });
  }

  onSubmit(form) {
    this.loading = true;
    this.userService.changeUserPassword(this.passedData, form.value)
      .subscribe(result => {
          this.loading = result.isLoading;
          this.success = result.isSuccess;
          this.name = result.fullName;
      }, 
      error => {
        this.error = true;
        this.loading = false;
        this.success = false;
        console.log(error);
      });
    this.changePasswordForm.reset();
  }

}
