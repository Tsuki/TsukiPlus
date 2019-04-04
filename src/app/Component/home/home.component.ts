import {Component, OnInit} from '@angular/core';

import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {cuckoostore} from '~/app/interface/store';
import OAuthInfo = cuckoostore.OAuthInfo;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'TsukiPlus';

  info$: Observable<OAuthInfo>;

  constructor(private store: Store<{ oAuthInfo: OAuthInfo }>) {
  }

  ngOnInit() {
    this.info$ = this.store.pipe(select('oauthInfo'));
    this.info$.subscribe(_ => console.log(_));
  }
}
