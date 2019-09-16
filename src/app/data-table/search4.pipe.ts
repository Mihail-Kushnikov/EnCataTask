import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
     name: 'd'
})

export class search4Pipe implements PipeTransform{
 


    transform(footwears, value){
        return footwears.filter(d=>{
            return d.season.includes(value)
        })
     
    }
}