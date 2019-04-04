import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '~/environments/environment';
import {OAuthInfoReducer} from '~/app/ngrx/reducer';
import {cuckoostore} from '~/app/interface/store';
import {mastodonentities} from '~/app/interface/entities';

export interface State {
  oauthInfo: cuckoostore.OAuthInfo;

}

export interface NoopState {
  mastodonServerUri: String;
  currentUserAccount: mastodonentities.Account;
  StateInfo: cuckoostore.StateInfo;
}

function getLocalSetting(tag, defaultValue) {
  return localStorage.getItem(tag) ? JSON.parse(localStorage.getItem(tag)) : defaultValue;
}

export const reducers: ActionReducerMap<State> = {
  oauthInfo: OAuthInfoReducer
};


export const metaReducersMap: MetaReducer<State>[] = !environment.production ? [] : [];

