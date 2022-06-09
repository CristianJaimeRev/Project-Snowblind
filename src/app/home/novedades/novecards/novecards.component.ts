import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-novecards',
  templateUrl: './novecards.component.html',
  styleUrls: ['./novecards.component.scss']
})
export class NovecardsComponent implements OnInit {

  @Input() datanews:any;
  
  constructor(private primengConfig: PrimeNGConfig) { }

  display: boolean = false;
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  

  showDialog() {
      this.display = true;
      
  }

}
