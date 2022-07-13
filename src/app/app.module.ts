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
import { PhotosPageComponent } from './features/photos-page/photos-page.component';
import { WeddingPartyPageComponent } from './features/wedding-party-page/wedding-party-page.component';
import { RegistryPageComponent } from './features/registry-page/registry-page.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { SecretPageComponent } from './features/secret-page/secret-page.component';
import { NoteblockComponent } from './shared/noteblock/noteblock.component';
import { ImgLazyLoadingDirective } from './shared/img-lazy-loading.directive';
import { RegistryCardComponent } from './shared/registry-card/registry-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    AppFooterComponent,
    HomePageComponent,
    RsvpComponent,
    PhotosPageComponent,
    WeddingPartyPageComponent,
    RegistryPageComponent,
    LightboxComponent,
    SecretPageComponent,
    NoteblockComponent,
    ImgLazyLoadingDirective,
    RegistryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'rsvp', component: HomePageComponent},
      {path: 'photos', component: PhotosPageComponent},
      {path: 'wedding-party', component: WeddingPartyPageComponent},
      {path: 'registry', component: RegistryPageComponent},
      {path: 'secret', component: SecretPageComponent},
      {path: '', redirectTo: '/rsvp', pathMatch: 'full'},
      {path: '**', redirectTo: '/rsvp', pathMatch: 'full'},
      // { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
