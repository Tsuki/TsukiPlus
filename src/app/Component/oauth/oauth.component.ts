import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OAuthComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmitServerName($event: Event) {
    return '';
  }

}
