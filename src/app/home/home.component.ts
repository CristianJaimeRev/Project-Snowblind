import { Component, OnInit } from '@angular/core';

//GetService is a it is a file in our project that makes a get to the url that was passed to it
import { GetService } from '../services/get/get.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public listdata:any=[];//this is a array to store the data 
  public response:any;//this is a auxiliar variable to overwrite in the array

  constructor(private GetService:GetService) { }

  ngOnInit(): void {//this function is executes when the pages loads
    this.OnPrincipal();
  }
   //This fuction is to get and store the data from database in Firebase
  public OnPrincipal(){
    this.GetService.get('https://final-proyectsnowblind-default-rtdb.europe-west1.firebasedatabase.app/Principal.json')//is important!! the information must be in json format
    .subscribe(response=>{
      this.listdata=response;
    })
  }
}
