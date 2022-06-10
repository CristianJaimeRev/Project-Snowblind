import { Component, OnInit } from '@angular/core';

//GetService is a it is a file in our project that makes a get to the url that was passed to it
import { GetService } from '../services/get/get.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public listdatasearch:any=[];//this is a array to store the data 
  public response:any;//this is a auxiliar variable to overwrite in the array

  constructor(private GetService:GetService) { }

  //This is the posts for the pipes
  filterSearch='';
  selectSearch='';
  selectSearchtype='';
  
  ngOnInit(): void { //this function is executes when the pages loads
    this.OnDatasearch();
  }

  //This fuction is to get and store the data from database in Firebase
  public OnDatasearch(){
    this.GetService.get('https://final-proyectsnowblind-default-rtdb.europe-west1.firebasedatabase.app/Busqueda.json')//is important!! the information must be in json format
    .subscribe(response=>{
      this.listdatasearch=response;
    })
  }

}
