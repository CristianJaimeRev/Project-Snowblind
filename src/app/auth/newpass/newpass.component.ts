import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorfireService } from 'src/app/services/errorfire/errorfire.service';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss']
})
export class NewpassComponent implements OnInit {
  newpass:FormGroup;

  constructor(private formbuilder:FormBuilder, private errorauth:ErrorfireService, private newpassword:AngularFireAuth,private toastr: ToastrService, private router:Router) { 
    this.newpass = this.formbuilder.group({
      email:["",[Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperate(){

    const email = this.newpass.value.email;

    this.newpassword.sendPasswordResetEmail(email).then(()=>{
      this.toastr.info("Se ha enviado un correo para restrablecer su contraseña", "AVISO");
      this.router.navigate(["/sign-in"]);
    }).catch((error)=>{
      //this.toastr.error(this.errorauth.errorfire(error.code),'Error');
    })

  }
}
