import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetype'
})
export class PipetypePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const SelectType = [];

    for(const posttype of value){
      if(posttype.tipo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        SelectType.push(posttype);

      }
    }
    return SelectType;

  }

}
