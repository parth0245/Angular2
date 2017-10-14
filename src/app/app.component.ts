import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome {{getFullName()}}</h1>
  <img bind-src='imgPath'/>
  <employee></employee>`,
})
export class AppComponent  {
  firstName : string = 'Parth';
  lastName : string = 'Pandey';

  imgPath :string = 'http://shop.wwe.com/on/demandware.static/-/Sites/default/dw90089c58/images/slot/landing/superstar-landing/Superstar-Category_Superstar_562x408_tripleH.png';
  getFullName() :string {
    return this.firstName+' '+this.lastName;
  }
  }
