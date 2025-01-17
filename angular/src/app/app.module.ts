import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImagekitioAngularModule } from 'imagekitio-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImagekitioAngularModule.forRoot({
      urlEndpoint: "your_endpoint",
      publicKey: "your_public_key",
      authenticationEndpoint: "your_authentication_endpoint"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
