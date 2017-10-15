import {Component , Input , Output , EventEmitter , OnChanges ,SimpleChange} from '@angular/core'

@Component({
    selector : 'rating',
    templateUrl :'app/EmployeeData/ratingCount.component.html'
})

export class UserRating implements OnChanges {

    selectedRating : string = 'all';

    @Output()
    changeRating : EventEmitter<string> = new EventEmitter<string>();   

    @Input() all : number;

    @Input() positive : number;

    @Input() negative : number;

    ngOnChanges(changes : SimpleChange){
       
        for(let property in changes){
            let change = changes[property];
            let newVal = JSON.stringify(change.currentValue);
            let oldVal = JSON.stringify(change.previousValue);
            if(property == 'all'){
                console.log(newVal , oldVal);
            }
            
        }
    }

    changeUserRating(){
        this.changeRating.emit(this.selectedRating);
    }
}