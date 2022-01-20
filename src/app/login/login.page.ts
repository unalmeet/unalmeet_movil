import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  SignupForm:FormGroup;

  constructor(public http: HttpService, public formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.SignupForm = new FormGroup({
          'email':new FormControl(''),
          'password':new FormControl(''),
      });
    // this.SignupForm = this.formBuilder.group({
    //   email: [''],
    //   password: ['']
    // })
    }
  
  onSubmit(){  
      const {email, password} = this.SignupForm.value;
      this.http.login(email, password).then(res=>{
        alert(JSON.stringify(res));
      })
    }

}
