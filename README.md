# Angular MSAL Integration

This project demonstrates how to integrate Microsoft Authentication Library (MSAL) with an Angular application for Azure AD authentication and secure API access. 

## Table of Contents

- [Prerequisites](#prerequisites)
- [MSAL Configuration](#msal-configuration)
- [Setting Up MSAL in Your Angular Application](#setting-up-msal-in-your-angular-application)
- [Running the Application](#running-the-application)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Further Help](#further-help)

## Prerequisites

Before you begin, ensure you have the following:

- **Azure AD App Registration**: Register your application in Azure Active Directory (AD) to obtain your `clientId` and `tenantId`. You'll need these values for your MSAL configuration.

## MSAL Configuration

To set up MSAL in your Angular application, you will need to define the configuration settings. The configuration includes:

- **Client ID**: The application (client) ID obtained from Azure AD.
- **Authority**: The URL for Azure AD, which includes your tenant ID.
- **Redirect URI**: The URL where Azure will redirect after authentication.
- **Cache Settings**: Configure how the application stores authentication states.

## Setting Up MSAL in Your Angular Application

1. **Install MSAL Packages**: Begin by installing the necessary MSAL packages for Angular. This can typically be done using npm or yarn.

2. **Create Configuration File**: Create a configuration file (e.g., `auth-config.ts`) where you will define the MSAL configuration settings. This includes setting up the `msalConfig`, `msalGuardConfig`, and `msalInterceptorConfig`.

3. **Update App Module**: Import the MSAL module in your main application module (e.g., `app.module.ts`) and initialize it with your configuration. Ensure that you set up the MSAL guard and interceptor for managing authentication and securing API requests.

4. **Protect Routes**: Use MSAL guards to protect your application routes. This ensures that only authenticated users can access certain parts of your application.

5. **Implement Login and Logout**: Create methods for handling user login and logout within your components. These methods will use the MSAL service to manage authentication flows.

6. **Secure API Calls**: Use the MSAL interceptor to automatically attach authentication tokens to your HTTP requests to protected resources, such as Microsoft Graph API.

## Running the Application

To run the application, use the Angular CLI command to start the development server. Once the server is running, navigate to the specified local URL in your web browser.

## Code Scaffolding

If you need to create additional components or services, you can use the Angular CLI commands to generate them. This will help maintain a clean project structure.

## Build

When you're ready to deploy your application, you can build it using the Angular CLI command. The build artifacts will be stored in the `dist/` directory, ready for deployment.

## Running Unit Tests

You can execute unit tests to ensure your components and services function as expected. This can help identify any issues in your code before deployment.

## Running End-to-End Tests

For end-to-end testing, set up the necessary packages and run your tests to verify the overall functionality of your application.

## Further Help

For additional help with the Angular CLI or to learn more about MSAL integration, refer to the following resources:

- [Angular CLI Documentation](https://angular.io/cli)
- [Microsoft Authentication Library (MSAL) Documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview)
