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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomepageComponent,
    PricingComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'homepage', component: HomepageComponent, data:{ state: 'home'}},
      { path:'pricing', component: PricingComponent, data:{ state: 'pricing'} },
      { path:'about', component: AboutComponent , data:{ state: 'about'}},
      { path:'contact', component: ContactComponent, data:{state: 'contact'}},
      { path:'', redirectTo: 'homepage', pathMatch: 'full'}
    ],{ preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
