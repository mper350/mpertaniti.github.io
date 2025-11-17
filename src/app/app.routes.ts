import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BookComponent } from './book/book.component';
import { BookedComponent } from './book/booked/booked.component';

import { InfoComponent } from './info/info.component';
import { PlacesinfoComponent } from './info/placesinfo/placesinfo.component';
import { ServiceinfoComponent } from './info/serviceinfo/serviceinfo.component';
import { TravelinfoComponent } from './info/travelinfo/travelinfo.component';
import { FoodinfoComponent } from './info/foodinfo/foodinfo.component';
import { PlaceholderComponent } from './info/placeholder/placeholder.component';

import { FaqComponent } from './faq/faq.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactedComponent } from './contact-us/contacted/contacted.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},

  { path: 'book', component: BookComponent},
  { path: 'book/booked', component: BookedComponent},

  { path: 'info', component: InfoComponent},
  { path: 'info/places', component: PlacesinfoComponent},
  { path: 'info/services', component: ServiceinfoComponent},
  { path: 'info/travel', component: TravelinfoComponent},
  { path: 'info/food', component: FoodinfoComponent},
  { path: 'info/placeholder', component: PlaceholderComponent},

  { path: 'faq', component: FaqComponent},

  { path: 'contact_us', component: ContactUsComponent},
  { path: 'contact_us/contacted', component: ContactedComponent},
];
