import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { MsalBroadcastService} from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.authService.instance.initialize(); // Ensure MSAL initialization
      this.msalBroadcastService.inProgress$
        .pipe(filter((status: InteractionStatus) => status === InteractionStatus.None))
        .subscribe(() => {
          this.isLoggedIn = this.authService.instance.getAllAccounts().length > 0;
        });
    } catch (error) {
      console.error("Error initializing MSAL:", error);
    }
  }

  login() {
   this.authService.loginRedirect();
    //this.authService.loginPopup(); // use this if you want a microsoft login pop inside your app instead of redirecting
  }

  logout() {
    this.authService.logoutRedirect();
  }
}
