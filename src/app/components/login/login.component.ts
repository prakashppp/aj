import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  constructor(private fb:FormBuilder){}

  nform=this.fb.group({
    uname:['',Validators.required],
    pass:['',Validators.required]
  })
}
