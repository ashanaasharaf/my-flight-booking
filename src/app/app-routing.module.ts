import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path:'',
    component:WebsiteLandingComponent,
    children:[
      {
        path:'search',
        component:SearchComponent,
        title:'Search Flight'
      },
      {
        path:'book-flight',
        component:BookFlightComponent,
        title:'Book New Ticket'
      },
      {
        path:'Bookings',
        component:MyBookingsComponent,
        title:'My-Bookings'
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'airport',
        component:AirportComponent
      },
      {
        path:'all-flight',
        component:AllFlightsComponent
      },
      {
        path:'all-bookings',
        component:BookingsComponent
      },
      {
        path:'city',
        component:CityComponent
      },
      {
        path:'new-flight',
        component:NewFlightComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
