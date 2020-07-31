import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button';
import { MouseWheelDirective } from './mousewheel.directive';
import { AppRoutingModule } from './app-routing.module';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { MobileHeaderComponent } from './header/mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './header/desktop-header/desktop-header.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MobilePricingComponent } from './mobile-pricing/mobile-pricing.component';


@NgModule({
  entryComponents: [MobileHomepageComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomepageComponent,
    PricingComponent,
    ContactComponent,
    MouseWheelDirective,
    MobileHomepageComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    MobilePricingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
