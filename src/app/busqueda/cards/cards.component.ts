import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input() datacards:any;

  constructor(private primengConfig: PrimeNGConfig) { }
  
  display: boolean = false;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  
  showDialog() {
      this.display = true;
      
  }
}
