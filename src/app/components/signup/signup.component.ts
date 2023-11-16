import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private fb:FormBuilder){}
  sform=this.fb.group({
    uname:['',Validators.required],
    pass:['',Validators.required]
  })

  
  signupUser:any[]=[];
  
  signupObj:any={
    uname:'',
    pass:''
  }

  signup(){
    this.signupUser.push(this.signupObj)
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
  }
}
