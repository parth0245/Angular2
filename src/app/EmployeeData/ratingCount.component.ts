import {Component , Input , Output , EventEmitter} from '@angular/core'

@Component({
    selector : 'rating',
    templateUrl :'app/EmployeeData/ratingCount.component.html'
})

export class UserRating {

    selectedRating : string = 'all';

    @Output()
    changeRating : EventEmitter<string> = new EventEmitter<string>();   

    @Input()
    all : number;

    @Input()
    positive : number;

    @Input()
    negative : number;

    changeUserRating(){
        this.changeRating.emit(this.selectedRating);
    }
}