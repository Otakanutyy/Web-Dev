import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    const shareUrl = encodeURIComponent(product.link);
    const telegramShareUrl = `https://t.me/share/url?url=${shareUrl}`;

    // Open the Telegram share link in a new window
    window.open(telegramShareUrl, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
