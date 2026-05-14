import { CanActivateFn }
from '@angular/router';

export const authGuard:
CanActivateFn = () => {

  const user =
    localStorage.getItem('user');

  return !!user;
};