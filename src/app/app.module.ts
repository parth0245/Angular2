import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import { EmployeeDetails } from './EmployeeData/employee.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { Section } from './section/section.component';
import { Employeetitle } from './EmployeeData/employee.pipe';
import { UserRating } from './EmployeeData/ratingCount.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule],
  declarations: [ AppComponent , Header , Footer ,Section , EmployeeDetails , Employeetitle ,UserRating],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
