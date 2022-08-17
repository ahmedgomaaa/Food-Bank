// isLoggedIn.actions.ts
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Login = '[Login] Login',
    Logout = '[Login] Logout',
    // CheckLogin = '[Login] CheckLogin'
}

export class Login implements Action {
  readonly type = ActionTypes.Login;
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}

// export class CheckLogin implements Action {
//   readonly type = ActionTypes.CheckLogin;
// }
