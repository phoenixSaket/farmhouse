import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './shared/landing/landing.component';
import { TitleComponent } from './shared/title/title.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { OfferCardComponent } from './shared/offer-card/offer-card.component';
import { UserCardComponent } from './shared/user-card/user-card.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { InputComponent } from './shared/input/input.component';
import { InfoComponent } from './shared/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    TitleComponent,
    CarouselComponent,
    OfferCardComponent,
    UserCardComponent,
    ContactFormComponent,
    InputComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
