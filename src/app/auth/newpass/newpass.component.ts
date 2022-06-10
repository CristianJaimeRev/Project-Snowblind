//Reset the password with an email FONT=https://firebase.google.com/docs/auth/web/manage-users?hl=es

//This is the import base from the archive ¡¡¡Dont Touch!!!
import { Component, OnInit } from '@angular/core';

//We need the imports from firebase because it is firebase who will send the email
import { AngularFireAuth } from '@angular/fire/compat/auth';

//We will work with a form, like in the login or logout, we will import the imports from 'Form' and Validator to chatch the errors(Like in the login or signup)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Whe the input will be correct redirect to signin 
import { Router } from '@angular/router';

//Toastr is an angular's library of poster with which we will capture the error  
import { ToastrService } from 'ngx-toastr';

//With ErrorfireService we catch the errors in the post when we press submit, this is a service in pur project
import { ErrorfireService } from 'src/app/services/errorfire/errorfire.service';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss']
})
export class NewpassComponent implements OnInit {

  newpass:FormGroup;//FormGroup aggregates the values of each child FormControl into one object, 'newpass' is the key with we will define the form

//we inject the imports in the constructor less FormGroup because we will need for the validators
  constructor(private formbuilder:FormBuilder, private errorauth:ErrorfireService, private newpassword:AngularFireAuth,private toastr: ToastrService, private router:Router) { //we inject the imports in the constructor less FormGroup because we will need for the validators

//Where we create the validators, Validators.required makes the chosen input be obligatory, Validators.email makes obligates the value from chosen input has email format
    this.newpass = this.formbuilder.group({ //Frombuilder groups all inputs to avoid the repetitions
      email:["",[Validators.required,Validators.email]]
    })

  }

  ngOnInit(): void {
  }
 
  recuperate(){ //This is the function where will we "send" the reset email

    const email = this.newpass.value.email; //We define a const with the value of input, we select it with 'formControlName' in the html

    this.newpassword.sendPasswordResetEmail(email).then(()=>{ //sendPasswordResetEmail is a promise from AngularFireAuth, is what will be responsible for sending the email, because is a promise we use '.then'
      this.toastr.info("Se ha enviado un correo para restrablecer su contraseña", "AVISO"); // With 'troastr' will come outa message and if the submit is correct, the promise will send a reset email and navigate to sign in
      this.router.navigate(["/sign-in"]); //if the submit is correct navigate to sign in
    }).catch((error)=>{
      this.toastr.error(this.errorauth.errorfire(error.code),'Error'); //Catch the error with ErroAuthService in our porject and shows them in a message
    })

  }
}
