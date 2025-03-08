import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  User:FormGroup=new FormGroup({
    fullname:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl(""),
    confirmpassword:new FormControl(""),
  })
  OnSave(){
    const FormUser=this.User.value
    if (this.User.valid){
      alert("Registeed Successfully")
    }
    else{
      alert("Enter all the field")
    }
  }
}
