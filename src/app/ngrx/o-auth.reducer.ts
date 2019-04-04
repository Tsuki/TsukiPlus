import {Action} from '@ngrx/store';
import {ActionTypes} from './o-auth.action';

export const initialState: OAuthInfo = {
  clientId: localStorage.getItem('clientId') || '',
  clientSecret: localStorage.getItem('clientSecret') || '',
  accessToken: localStorage.getItem('accessToken') || '',
  code: localStorage.getItem('code') || ''
};

export interface OAuthInfo {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  code: string;
}

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Reset:
      return initialState;
    case ActionTypes.Update:
      return state;
    case ActionTypes.Save:
      return state;
    default:
      return state;
  }
}
