import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
     name: 'c'
})

export class search3Pipe implements PipeTransform{
 


    transform(footwears, value){
        return footwears.filter(c=>{
            return c.model.includes(value)
        })
     
    }
}