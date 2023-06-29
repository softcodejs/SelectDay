import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup,} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProfileService } from '../services/profile.service';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Profile } from '../model/profile_m';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule],
})

export class LoginComponent implements OnInit {
  title = 'SelectDay';
  hide = true;
  submitedform = false;
  progress = 50;
  profile: any;
  verificationCode: any;

  constructor(private _formBuilder: FormBuilder, 
    private _profileService: ProfileService, 
    private router: Router,
    private messageError: MessageService){}

  formlogin = this._formBuilder.group({
  name: ['',Validators.compose([Validators.required])],
  email: ['',Validators.compose([Validators.required, Validators.email])],
  phone: ['',Validators.compose([Validators.required, Validators.pattern(/^([0-9])*$/)])],
  pass: ['',Validators.compose([Validators.required])]
  });

  formVerification = this._formBuilder.group({
    code: ['',Validators.compose([Validators.required])],
    });

  ngOnInit() {}

  addProfile(){    
    //this.router.navigate(['/bussinesData']);
    if(!this.formlogin.invalid){
      this.submitedform = true;
      this.progress = 100;
      this.profile  = new Profile(this.formlogin.value.name! , this.formlogin.value.email!, this.formlogin.value.phone!, this.formlogin.value.pass!);
      this.formlogin.reset();
      this._profileService.SendEmail(this.profile.email).subscribe(response => {
        this.verificationCode = response
        console.log(response);
      });
    } 
  }

  verify(){      
    if(this.formVerification.value.code! == this.verificationCode){
      this.SendProfile();
    } else {
      this.formVerification.controls.code.setErrors({'incorrect': true });
      ////error
    }   
  }

  SendProfile(){
    this._profileService.ProfileRegister(this.profile).subscribe(response => {
      this.formVerification.reset();
    });
  }

  Back(){
    this.submitedform = false;
  }

}


