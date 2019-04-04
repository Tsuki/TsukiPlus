import {Action} from '@ngrx/store';
import {ActionTypes} from './action';
import {cuckoostore} from '~/app/interface/store';


export function OAuthInfoReducer(state = initialOAuthInfo, action: Action) {
  switch (action.type) {
    case ActionTypes.Reset:
      return initialOAuthInfo;
    case ActionTypes.Update:
      return state;
    case ActionTypes.Save:
      return state;
    default:
      return state;
  }
}

export const initialOAuthInfo: cuckoostore.OAuthInfo = {
  clientId: localStorage.getItem('clientId') || '',
  clientSecret: localStorage.getItem('clientSecret') || '',
  accessToken: localStorage.getItem('accessToken') || '',
  code: localStorage.getItem('code') || ''
};

