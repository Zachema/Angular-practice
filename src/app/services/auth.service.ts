import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private storage: LocalStorageService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {

    const hasInfo = !!this.storage.get('name')

    console.dir(currentState);
    if (currentState.url.includes('auth') && hasInfo) {
      this.router.navigateByUrl('/main')
      return false;
    }
    if (currentState.url.includes('auth') && !hasInfo) {
      this.router.navigateByUrl('/auth')
      return false;
    }
    return true;
  }
}
