import { Component } from '@angular/core';
import  { IRating } from './rating'
@Component({
  selector: 'employee',
  templateUrl: 'app/EmployeeData/employee.component.html',
})
export class EmployeeDetails  { 
  company : string = null;
  mobile :string = null;
  feedback :string = null;
  uname : string = null ;
  rating : string = 'positive';

  feedbackList : IRating[] = [];

  defaultRating : string = 'all';

  onRatingChange(ratingValue:string) :void{
    this.defaultRating = ratingValue;
  }

  giveFeedback() : void {
    this.feedbackList.push({company:this.company,mobile:this.mobile,feedback:this.feedback,name:this.uname,rating:this.rating});
    console.log('feedback is',this.feedbackList );
  }

  getTotalRating() : number {
    return this.feedbackList.length;
  }

  getPositiveRating() : number {
    return this.feedbackList.filter(r=>r.rating==='positive').length;
  }

  getNegativeRating() : number {
    return this.feedbackList.filter(r=>r.rating==='negative').length;
  }
 }
