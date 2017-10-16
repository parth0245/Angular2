import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component ({
    templateUrl :'app/EmployeeData/feedbackTable.component.html'
})

export class FeedbackComponent {
    feedback : string;
    constructor(private myRoute : ActivatedRoute){
        this.feedback = this.myRoute.snapshot.params.id;     
    }
}