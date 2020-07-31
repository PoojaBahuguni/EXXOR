import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router} from '@angular/router'; // CLI imports router
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { ApplicationStateService } from './application-state.service';
import { MobilePricingComponent } from './mobile-pricing/mobile-pricing.component';

const routes: Routes = [
    { path:'', component: HomepageComponent, data:{ state: 'home'} },
    { path:'pricing', component: PricingComponent },
    { path:'about', component: AboutComponent , data:{ state: 'about'}},
    { path:'contact', component: ContactComponent, data:{state: 'contact'}},
    { path:'**', redirectTo: '', pathMatch: 'full'}
  ]; // sets up routes constant where you define your routes

const mobile_routes: Routes = [
    { path:'', component: MobileHomepageComponent, data:{ state: 'home'} },
    { path:'pricing/:plan', component: MobilePricingComponent },
    { path:'**', redirectTo: '', pathMatch: 'full'}
]
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

    public constructor(private router: Router,
        private applicationStateService: ApplicationStateService){
            if (applicationStateService.getIsMobileResolution()) {
                router.resetConfig(mobile_routes);
              }
        }
}