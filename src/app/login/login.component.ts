import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule],
})

export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  title = 'SelectDay';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern(/^([0-9])*$/)]);
  hide = true;
  activeRegister = false;
  

  ngOnInit() {

  }

}


