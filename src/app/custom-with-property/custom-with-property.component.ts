import { Component } from '@angular/core';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-custom-with-property',
  templateUrl: './custom-with-property.component.html',
  styleUrls: ['./custom-with-property.component.css']
})
export class CustomWithPropertyComponent extends BaseComponentComponent {

  private otherProperty = 'bar';

}
