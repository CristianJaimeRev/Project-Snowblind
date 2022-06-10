//FONT https://www.positronx.io/firebase-authentication-in-angular-8-with-angularfire2/

//This is the import base from the archive ¡¡¡Dont Touch!!!
import { Component, OnInit } from '@angular/core';

//We need the imports from firebase because it is firebase who will makes the signup
import { AngularFireAuth } from '@angular/fire/compat/auth';

//We will work with a form, like in the login or logout, we will import the imports from 'Form' and Validator to chatch the errors(Like in the resset password or sigin)
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

//Toastr is an angular's library of poster with which we will capture the error  
import { ToastrService } from 'ngx-toastr';

//Whe the input will be correct redirect to signin 
import { Router } from '@angular/router';

//With ErrorfireService we catch the errors in the post when we press submit, this is a service in pur project
import { ErrorfireService } from 'src/app/services/errorfire/errorfire.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  UserSignin: FormGroup;//FormGroup aggregates the values of each child FormControl into one object, 'UserSignin' is the key with we will define the form

  //we inject the imports in the constructor less FormGroup because we will need for the validators
  constructor(private formbuilder:FormBuilder,private errorauth:ErrorfireService, private Signin:AngularFireAuth,private toastr: ToastrService, private router:Router) {
    
    this.UserSignin=this.formbuilder.group({//Where we create the validators Validators.required makes the chosen input be obligatory
      email:['',Validators.required],
      password:['',Validators.required],
    })
   }

  ngOnInit(): void {}


  login(){
    const email = this.UserSignin.value.email;
    const password = this.UserSignin.value.password;

    this.Signin.signInWithEmailAndPassword(email, password).then((user)=>{ //signInWithEmailAndPassword  is other promise from AngularFireAuth, this makes a signin in the Firestore Authentication
     
      if(user.user?.emailVerified){ //If the email in not verified in the Authentication this not makes login
        
        this.router.navigate(["/home"]); //If the login is correst navigate with routing in home and appears a welcome message with toastr
        this.toastr.success(email,"Bienvenido");
      }else{
        this.toastr.error("Usuario no verificado","Error");
      }
      
    }).catch((error)=>{
      this.toastr.error(this.errorauth.errorfire(error.code),'Error'); //Catch the error with ErroAuthService in our porject and shows them in a message
    })
  }

}
