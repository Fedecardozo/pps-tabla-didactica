import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UsersService } from '../services/users.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auhService: UsersService = inject(UsersService);
  const router: Router = inject(Router);

  if (auhService.correo) {
    router.navigateByUrl('/home');
  }

  return true;
};
