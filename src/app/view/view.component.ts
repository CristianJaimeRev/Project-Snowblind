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
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.movie = params.get('movie')!;
     
    });

   /* const App = () => {
      //const video = useRef<HTMLVideoElement>();
      const playVideo = (event: any) => {
        video.current && video.current.play();
      };
    
      return (
        <div className="App">
          <video ref={video} loop src={bike} />
        </div>
      );
    };
      
  }*/
  }
  

}
