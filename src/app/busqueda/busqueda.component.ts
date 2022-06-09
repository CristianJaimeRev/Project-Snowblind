import { Component, OnInit } from '@angular/core';
import { GetService } from '../services/get/get.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public listdatasearch:any=[];
  public response:any;

  constructor(private GetService:GetService) { }
  filterSearch='';
  selectSearch='';
  selectSearchtype='';
  
  ngOnInit(): void {
    this.OnDatasearch();
  }

  public OnDatasearch(){
    this.GetService.get('https://final-proyectsnowblind-default-rtdb.europe-west1.firebasedatabase.app/Busqueda.json')
    .subscribe(response=>{
      this.listdatasearch=response;
      console.log(this.listdatasearch)
    })
  }

}
