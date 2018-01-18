import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

onSubmit = function(user){
  console.log(user);
}
  constructor() { }

  form;
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", Validators.compose([
                                Validators.required,
                                Validators.minLength(4),
                                Validators.pattern('[\\w\\-\\s\\/]+')
                                ])),                                
      passwd: new FormControl("",this.textValidator),
    });
  }
  //custom text field validations
  textValidator(txtField){
    if(txtField.value.length < 3){
      return {'passwd': true};
    }
  }
/*data= {};
formSubmit() {
  if(data.username == "admin" && data.password == "admin"){
    console.log("Hello Admin");
  }else{
    console.log("Wrong crediential");
  }
}*/
}
