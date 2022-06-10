//FONT https://www.positronx.io/create-user-with-email-password-in-firebase-and-angular/

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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  UserRegister:FormGroup; //FormGroup aggregates the values of each child FormControl into one object, 'UserRegister' is the key with we will define the form

  //we inject the imports in the constructor less FormGroup because we will need for the validators
  constructor(private formbuilder:FormBuilder, private errorauth:ErrorfireService, private Signup:AngularFireAuth,private toastr: ToastrService, private router:Router) {

   //Where we create the validators Validators.required makes the chosen input be obligatory
    this.UserRegister=this.formbuilder.group({//Frombuilder groups all inputs to avoid the repetitions
      email:['',[Validators.required, Validators.email]],//Validators.email makes obligates the value from chosen input has email format
      password:['',[Validators.required, Validators.minLength(6)]],//Validators.minLengt obligates the value chosen input has a (x number) minimun caracters
      password2:['',Validators.required],
      tarjetnum:['',[Validators.required, Validators.minLength(16),Validators.maxLength(16),Validators.max(9999999999999999),Validators.min(1111111111111111)]], //Validators.maxLengt obligates the value chosen input has a (x number) maximun caracters, max and min obligates the value chosen input has a number in the rank
      cvc:['',[Validators.required, Validators.minLength(3), Validators.maxLength(3),Validators.max(999),Validators.min(111)]], //Validators.maxLengt obligates the value chosen input has a (x number) maximun caracters
      datexp:['',Validators.required],
      name:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
 
  register(){

    //We define a const with the value of input, we select it with 'formControlName' in the html
    const email=this.UserRegister.value.email;
    const password=this.UserRegister.value.password;
    const password2=this.UserRegister.value.password2;
  

    if(password!== password2){//This if is for the two password to be equals

      this.toastr.error('Las contraseñas no coinciden','Error');//if they are not equals, a message will appear

    }
    else{ //if they are equals, a message will appear
     
        this.Signup.createUserWithEmailAndPassword(email,password).then(()=>{ //reateUserWithEmailAndPassword is other promise from AngularFireAuth, this is to register the email in auth from Firebase project
        this.Emailverified(); // this is a call to the function of email verification
        })
        .catch((error)=>{
          this.toastr.error(this.errorauth.errorfire(error.code),'Error');//Catch the error with ErroAuthService in our porject and shows them in a message
      })
    }

  }

  
  Emailverified(){ // This is a fuction to send a email to verificate the user 
    this.Signup.currentUser.then(user=> user?.sendEmailVerification()) //sendEmailVerification is other promise from AngularFireAut
    .then(()=>{
      this.router.navigate(["/sign-in"]);
      this.toastr.success('Usuario registrado correctamente! le enviamos un correo para verificar su usuario');
    });
  }
 
}
