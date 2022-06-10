import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  movie!: string;
  episode!:number;
  constructor(private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    //This is for cuatch the data (The video) from the array in the component and pass to url
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.movie = params.get('movie')!;
     
    });

  }
  

}
