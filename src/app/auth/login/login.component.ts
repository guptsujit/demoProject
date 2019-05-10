import { Component, OnInit } from '@angular/core';
import {FormArray,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
  constructor(private fb:FormBuilder,private _authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.buildForm();
  }
 buildForm(){
  this.loginForm = this.fb.group({
    email : ['',Validators.required,Validators.email],
    password : ['',Validators.required]
  })
 }
  processLogin(){ 
     console.log(this.loginForm.value)
   if(this.loginForm.invalid){
     return;
   }
   this._authenticationService.login(this.loginForm.value.email,this.loginForm.value.password)
   .subscribe((response)=>{
     console.log(response);
   },(error)=>{
     console.log(error);
   });
   console.log(this.loginForm.controls.email.value)
  }
}
