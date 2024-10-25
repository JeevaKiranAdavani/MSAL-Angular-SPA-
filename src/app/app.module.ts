import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalModule, MsalService, MsalGuard, MsalInterceptor } from '@azure/msal-angular';
import { msalInstance, msalGuardConfig, msalInterceptorConfig, msalConfig } from './auth-config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicClientApplication } from '@azure/msal-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(
      new PublicClientApplication(msalConfig),
      msalGuardConfig,
      msalInterceptorConfig
    ),
  ],
  providers: [MsalGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Notes:

// MsalModule.forRoot() - Initializes MSAL within the Angular app with three parameters:
// PublicClientApplication instance: Created with msalConfig and provides the main MSAL client, handling all authentication functions.
// msalGuardConfig: Configuration for route guards, specifying how users interact with the app (popup or redirect).
// msalInterceptorConfig: Defines settings for MsalInterceptor, ensuring that access tokens are attached to requests for specified resources.
// PublicClientApplication(msalConfig) - Instantiates the PublicClientApplication class with msalConfig settings (like clientId, authority, redirectUri). This instance manages the entire authentication lifecycle (token storage, API interaction, etc.).

// MsalGuard - The MSAL Guard is added to providers to enforce authentication checks on specific routes. By including MsalGuard, Angular will verify a user’s authentication state before allowing access to routes that use this guard.

// HTTP Interceptor for MsalInterceptor:
// { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true } adds MsalInterceptor to the HTTP interceptors pipeline.
// MsalInterceptor - Attaches tokens to requests that match the protectedResourceMap from msalInterceptorConfig (e.g., requests to the Microsoft Graph API). The multi: true option ensures this interceptor doesn’t override other interceptors but works alongside them.