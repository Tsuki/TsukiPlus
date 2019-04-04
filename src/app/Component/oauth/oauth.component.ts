import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OAuthComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  brands: any[] = [
    {icon: 'https://pawoo.net/favicon.png', url: 'pawoo.net'},
    {icon: 'https://raw.githubusercontent.com/tootsuite/mastodon/master/public/favicon.ico', url: 'mastodon.social'},
  ];
  filteredBrands: any[];
  brand: string;

  valiForm: FormGroup;

  ngOnInit() {
    this.valiForm = this.fb.group({
      'url': new FormControl('', Validators.required)
    });
  }


  onSubmitServerName($event: Event) {
    return '';
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      const brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredBrands.push(brand);
      }
    }
  }
}
