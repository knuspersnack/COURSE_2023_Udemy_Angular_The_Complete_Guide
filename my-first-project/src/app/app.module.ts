import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { Exercise3Component } from './exercise3/exercise3.component';

  //declarations -> Angular knows about this components
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent, 
    ServersComponent, 
    Exercise3Component],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
