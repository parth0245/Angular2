import {Component} from '@angular/core'

@Component({
    selector:'header',
    templateUrl:'app/header/header.component.html'
})

export class Header {
    header : string = "header"
    pageTitle : string = 'List Of Reviews'
}