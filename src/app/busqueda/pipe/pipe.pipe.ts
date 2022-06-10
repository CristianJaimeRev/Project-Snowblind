//FONT https://jhapriti09.medium.com/custom-search-filter-pipe-for-table-search-in-angular-10-4b8a0f42513d
//FONT https://desarrolloweb.com/articulos/crear-usar-pipes-angular


import { Pipe, PipeTransform } from '@angular/core';

//Pipes are one of the utilities that Angular offers us to perform data transformations, when displaying them in the component templates
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const Search = [];//First we will define the constan with we store the word in the search

    for(const post of value){ //Post is a value from html elements what we search and value is all post
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){ //in case of not find the first caracter with indexOf, the pipe will returns -1
        Search.push(post); //push is a search
      }
    }
    return Search;

  }


}
