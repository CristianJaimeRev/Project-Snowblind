import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeselect'
})
export class PipeselectPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const Select = [];

    for(const postcls of value){
      if(postcls.clasificacion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        Select.push(postcls);

      }
    }
    return Select;

  }
}
