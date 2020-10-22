import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { faBroadcastTower, faSlidersH, faNetworkWired, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@app/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoginMode = true;
  faBroadcastTower = faBroadcastTower;
  faSlidersH = faSlidersH;
  faNetworkWired = faNetworkWired;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;

  constructor(
    private authService: AuthService,
    public translate: TranslateService,
    private router: Router,
  ) {
    translate.use('da');
  }

  ngOnInit(): void {

  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('auth');
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}