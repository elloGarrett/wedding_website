import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { AppNavComponent } from './shared/app-nav/app-nav.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { RsvpComponent } from './features/rsvp/rsvp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    AppFooterComponent,
    HomePageComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'rsvp', component: RsvpComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
