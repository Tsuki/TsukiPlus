import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  async fetchOAuthToken() {
    this.http.post('/oauth/token', {});
  }
}
