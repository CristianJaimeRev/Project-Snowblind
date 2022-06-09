import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorfireService } from 'src/app/services/errorfire/errorfire.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  UserSignin: FormGroup;


  constructor(private formbuilder:FormBuilder,private errorauth:ErrorfireService, private Signin:AngularFireAuth,private toastr: ToastrService, private router:Router) {
    this.UserSignin=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
   }

  ngOnInit(): void {}


  login(){
    const email = this.UserSignin.value.email;
    const password = this.UserSignin.value.password;

    this.Signin.signInWithEmailAndPassword(email, password).then((user)=>{
     
      //console.log(user.user)
      if(user.user?.emailVerified){
        
        this.router.navigate(["/home"]);
        this.toastr.success(email,"Bienvenido");
      }else{
        this.toastr.error("Usuario no verificado","Error");
      }
      
    }).catch((error)=>{
      this.toastr.error(this.errorauth.errorfire(error.code),'Error');
    })
  }

}
