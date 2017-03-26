import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent implements OnInit {

  private stuff: string;

  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.stuff = this.service.getStuff();
  }

}
