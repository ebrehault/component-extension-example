import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { MyServiceService } from './my-service.service';
import { CustomWithPropertyComponent } from './custom-with-property/custom-with-property.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponentComponent,
    CustomComponentComponent,
    CustomWithPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
