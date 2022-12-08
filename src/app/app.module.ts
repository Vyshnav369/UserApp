import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'

const myroutes=[
{path:"",component:AdduserComponent},
{path:"viewallusers",component:ViewallusersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ViewallusersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
