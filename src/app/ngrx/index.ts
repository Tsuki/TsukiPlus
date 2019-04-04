import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '~/environments/environment';
import {OAuthInfo, counterReducer} from '~/app/ngrx/o-auth.reducer';

export interface State {
  oauthInfo: OAuthInfo;
}

export const reducers: ActionReducerMap<State> = {
  oauthInfo: counterReducer
};


export const metaReducersMap: MetaReducer<State>[] = !environment.production ? [] : [];
