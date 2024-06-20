import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  canActivate(): boolean {
    //TODO: Check if accessToken is valid
    const canActive = this.authService.getAccessToken() != null;
    if (!canActive) {
      this.router.navigate(['/']);
    }
    return canActive;
  }
}
