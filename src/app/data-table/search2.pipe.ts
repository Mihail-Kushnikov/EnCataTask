import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
     name: 'b'
})

export class search1Pipe implements PipeTransform{
 


    transform(footwears, value){
        return footwears.filter(b=>{
            return b.firm.includes(value)
        })
     
    }
}