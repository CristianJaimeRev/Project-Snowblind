import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorfireService } from 'src/app/services/errorfire/errorfire.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  UserRegister:FormGroup;
  loading:boolean = false;

  constructor(private formbuilder:FormBuilder, private errorauth:ErrorfireService, private Signup:AngularFireAuth,private toastr: ToastrService, private router:Router) {
    this.UserRegister=this.formbuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      password2:['',Validators.required],
      tarjetnum:['',[Validators.required, Validators.minLength(16),Validators.maxLength(16)]],
      cvc:['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      datexp:['',Validators.required],
      name:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
 
  register(){
    const email=this.UserRegister.value.email;
    const password=this.UserRegister.value.password;
    const password2=this.UserRegister.value.password2;
    const tarjetnum=this.UserRegister.value.tarjetnum;
    const cvc=this.UserRegister.value.cvc;
    const datexp=this.UserRegister.value.datexp;
    const name=this.UserRegister.value.name;

    if(password!== password2){
      this.toastr.error('Las contraseñas no coinciden','Error');
    }
    else{
        this.loading=true;
        this.Signup.createUserWithEmailAndPassword(email,password).then(()=>{
        this.Emailverified();
        })
        .catch((error)=>{
          this.loading=false;
          this.toastr.error(this.errorauth.errorfire(error.code),'Error');
      })
    }

  }

  
  Emailverified(){
    this.Signup.currentUser.then(user=> user?.sendEmailVerification())
    .then(()=>{
      this.router.navigate(["/sign-in"]);
      this.toastr.success('Usuario registrado correctamente! le enviamos un correo para verificar su usuario');
    });
  }
 
}
