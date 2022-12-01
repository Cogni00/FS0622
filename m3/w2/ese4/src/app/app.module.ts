import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { Route, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';


const ROUTES : Route[] = [
    {
        path: "",
        component: HomePage
    },

    {
        path: "PostAttivi",
        component: PostAttiviComponent
    },

    {
        path: "PostInattivi",
        component: PostInattiviComponent
    },

]

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NavbarComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


