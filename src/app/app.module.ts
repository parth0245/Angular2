import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'
import { RouterModule , Route} from '@angular/router'

import { AppComponent }  from './app.component';
import { EmployeeDetails } from './EmployeeData/employee.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { Section } from './section/section.component';
import { Employeetitle } from './EmployeeData/employee.pipe';
import { UserRating } from './EmployeeData/ratingCount.component';
import { PageNotFound } from './pageNotFound/pageNotFound.component'
import { Home } from './home/home.component'
import { SignupComponent } from './userEntry/signup.component'
import { LoginComponent } from './userEntry/login.component'
import { FeedbackComponent } from './EmployeeData/feedback.component'

const appRoutes : Route = [
  {path:'review',component:Section},
  {path:'home',component:Home},
  {path:'signUp',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'feedback/:id',component:FeedbackComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFound}
];

@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent , Header , Footer ,Section , EmployeeDetails , Employeetitle , 
                  UserRating , PageNotFound , Home , SignupComponent , LoginComponent ,FeedbackComponent],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
