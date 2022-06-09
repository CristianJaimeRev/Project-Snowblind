import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const Search = [];

    for(const post of value){
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        Search.push(post);

      }
    }
    return Search;

  }


}
