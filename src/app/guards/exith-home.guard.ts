import { CanDeactivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';
import { Alert } from '../models/alert';

export const exithHomeGuard: CanDeactivateFn<unknown> = async (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const auhService: UsersService = inject(UsersService);
  const router: Router = inject(Router);
  if (await Alert.question()) {
    await auhService.cerrarSesion();
    setTimeout(() => {
      router.navigateByUrl('/login');
    }, 1000);
    return true;
  }
  return false;
};
