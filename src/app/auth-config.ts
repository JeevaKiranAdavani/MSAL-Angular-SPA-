import { Configuration, LogLevel,InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';

// MSAL Instance Configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: 'your-client-id', // Replace with your Azure AD app's client ID
    authority: 'https://login.microsoftonline.com/your-tenant-id', // Replace with your tenant ID or use 'common'
    redirectUri: 'http://localhost:4200', //URL to redirect users back to after a successful login. This should match one of the redirect URIs configured in the Azure AD portal for your app.
  },
  cache: {
    cacheLocation: 'localStorage', //localStorage stores tokens persistently (even after the browser is closed), as opposed to sessionStorage.
    storeAuthStateInCookie: false, // If set to true, this prevents issues with third-party cookies in embedded applications (e.g., iframes).
  },
  system: {
    loggerOptions: {
       // Defines levels for MSAL's console logging, allowing us to customize logging behavior.
      loggerCallback: (level, message, containsPii) => { //Indicates whether the message contains Personally Identifiable Information (PII); PII is excluded here to protect privacy.
        if (containsPii) return;
        switch (level) {
          case LogLevel.Error: console.error(message); break;
          case LogLevel.Info: console.info(message); break;
          case LogLevel.Verbose: console.debug(message); break;
          case LogLevel.Warning: console.warn(message); break;
        }
      },
    },
  },
};

// Create an instance of PublicClientApplication with msalConfig
export const msalInstance = new PublicClientApplication(msalConfig);

//  Type for configuring route protection with MsalGuard, which guards certain routes, ensuring only authenticated users can access them.
export const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Redirect, // Use InteractionType.Redirect or InteractionType.Popup here
  authRequest: {
    scopes: ['user.read'], // allows read access to the signed-in user’s profile data in Microsoft Graph.
  },
};

// Type for configuring MsalInterceptor, which automatically attaches access tokens to outgoing HTTP requests for protected resources.
export const msalInterceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Redirect, // Use InteractionType.Redirect or InteractionType.Popup here
  protectedResourceMap: new Map([
    ['https://graph.microsoft.com/v1.0/me', ['user.read']],
  ]),
};
