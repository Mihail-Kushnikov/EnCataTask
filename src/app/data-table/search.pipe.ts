import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
     name: 'a'
})

export class searchPipe implements PipeTransform{
 


    transform(footwears, value){
        return footwears.filter(a=>{
            return a.category.includes(value)
        })
     
    }
}