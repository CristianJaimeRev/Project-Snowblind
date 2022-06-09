import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get/get.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {

  public listdatanove:any=[];
  public response:any;

  constructor(private GetService:GetService) { }

  ngOnInit(): void {
    this.OnDatanew()
  }


  public OnDatanew(){
    this.GetService.get('https://final-proyectsnowblind-default-rtdb.europe-west1.firebasedatabase.app/Novedades.json')
    .subscribe(response=>{
      this.listdatanove=response;
      console.log(this.listdatanove)
    })
  }
}
