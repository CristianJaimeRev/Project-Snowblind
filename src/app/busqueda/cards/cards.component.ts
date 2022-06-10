import { Component, Input, OnInit } from '@angular/core';

//I use Primeng from frimework to create dinamics dialog 
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input() datacards:any; //This is from inject the card in other component with Input

//We must inject PrimeNGConfig in the constructor
  constructor(private primengConfig: PrimeNGConfig) { }
  
  display: boolean = false;//this boolean will be necesary to close and open the dinamic dialog

  ngOnInit(): void {
    this.primengConfig.ripple = true; //ripple is a primeng animations
  }
  
  showDialog() { //this function will open th dialog when it activates
      this.display = true;
      
  }
}
