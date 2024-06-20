import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isCollapsed!: boolean;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  get isLoggedIn(): boolean {
    // return this.authService.hasValidToken();
    return true;
  }

  // user$ = this.userProfileStore.userProfile$;

  constructor(
    private readonly authService: AuthService,
    // private readonly userProfileStore: UserProfileStore,
  ) {
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  login() {
    // this.authService.login();
  }

  signup() {
    // this.authService.login();
  }

  async logout() {
    await this.authService.logout();
    // // localStorage.clear();
    // // window.sessionStorage.clear();
  }

}
