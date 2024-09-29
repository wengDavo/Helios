import { Injectable } from '@angular/core';
import { navigationItemI } from '../../interfaces/navigation-item.interface';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  getFooterLinks(): Array<navigationItemI> {
    return [
      {
        title: 'find a store',
        links: [
          { name: 'Become A Member', path: '' },
          { name: 'Sign Up For Email', path: '' },
          { name: 'send us feedback', path: '' },
          { name: 'student discoounts', path: '' },
        ],
      },
      {
        title: 'get help',
        links: [
          { name: 'order status', path: '' },
          { name: 'delivery', path: '' },
          { name: 'returns', path: '' },
          { name: 'contact us', path: '' },
        ],
      },
      {
        title: 'about nike',
        links: [
          { name: 'news', path: '' },
          { name: 'careers', path: '' },
          { name: 'investors', path: '' },
          { name: 'Sustainability', path: '' },
        ],
      },
    ];
  }
}
