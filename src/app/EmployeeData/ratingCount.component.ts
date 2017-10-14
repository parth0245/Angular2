import {Component , Input} from '@angular/core'

@Component({
    selector : 'rating',
    templateUrl :'app/EmployeeData/ratingCount.component.html'
})

export class UserRating {
    @Input()
    all : number;

    @Input()
    positive : number;

    @Input()
    negative : number;
}