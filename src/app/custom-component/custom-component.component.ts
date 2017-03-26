import { Component } from '@angular/core';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent extends BaseComponentComponent {}
