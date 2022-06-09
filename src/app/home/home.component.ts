import { Component, OnInit } from '@angular/core';
import { GetService } from '../services/get/get.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public listdata:any=[];
  public response:any;

  constructor(private GetService:GetService) { }

  ngOnInit(): void {
    this.OnPrincipal();
  }
 
  public OnPrincipal(){
    this.GetService.get('https://final-proyectsnowblind-default-rtdb.europe-west1.firebasedatabase.app/Principal.json')
    .subscribe(response=>{
      this.listdata=response;
      console.log(this.listdata)
    })
  }
}
