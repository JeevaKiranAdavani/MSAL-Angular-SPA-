import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },// This is a Free route, No authentication require to route to this page
  { path: 'profile', component: ProfileComponent, canActivate: [MsalGuard] }, // This is a protected MSAL route ,you can only access this if you are authenticated with azure AD credentials
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
