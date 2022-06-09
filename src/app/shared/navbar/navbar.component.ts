import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 

  constructor(private logout:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
  
  }

  Logout(){
    this.logout.signOut().then(()=>this.router.navigate(["/sign-in"]))
  }

}
