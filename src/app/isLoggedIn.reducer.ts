import { Action } from '@ngrx/store';
import { ActionTypes } from './isLoggedIn.actions';
// import { AuthService } from 'src/auth/service/auth.service';

export const initialState = false

export function isLoggedInReducer(state = initialState, action: Action) {
//   var auth:AuthService = new AuthService();
  switch (action.type) {
    case ActionTypes.Login:
        return true;
    case ActionTypes.Logout:
        return false;
    // case ActionTypes.CheckLogin:
    //     // check if user is logged in
    //     var tmp = auth.loggedIn();


    //     return state;

    default:
      return state;
  }
}