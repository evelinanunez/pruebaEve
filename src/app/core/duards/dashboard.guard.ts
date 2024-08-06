import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
//import { AuthService } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/auth/paginas/login/login.service';


export const dashboardGuard: CanActivateFn = (): boolean | Promise<boolean> => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.verifyToken().then((isAuthenticated) => {
    if (isAuthenticated) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  });
};
