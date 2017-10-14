import {Pipe , PipeTransform} from '@angular/core'

@Pipe({
    name:'EmployeeTitle'
})

export class Employeetitle implements PipeTransform{
    transform(value:string):string{
        return value.toUpperCase();
    }
}