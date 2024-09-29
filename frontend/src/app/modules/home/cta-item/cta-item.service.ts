import { Injectable } from '@angular/core';
import { navigationItemI } from '../../../shared/interfaces/navigation-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CtaItemService {
  constructor() {}

  getCtaItems(): Array<navigationItemI> {
    return [
      {
        title: 'Icons',
        links: [
          { name: 'Air Force 1', path: '' },
          { name: 'Hurrcahe', path: '' },
          { name: 'Air Max 1', path: '' },
          { name: 'Air Max 95', path: '' },
        ],
      },
      {
        title: 'Shoes',
        links: [
          { name: 'All Shoes', path: '' },
          { name: 'Custom Shoes', path: '' },
          { name: 'Jordan Shoes', path: '' },
          { name: 'Running Shoes', path: '' },
        ],
      },
      {
        title: 'Clothing',
        links: [
          { name: 'All Clothing', path: '' },
          { name: 'Modest Wear', path: '' },
          { name: 'Hoodies & Pullover', path: '' },
          { name: 'Shirts & Tops', path: '' },
        ],
      },
      {
        title: 'Kids',
        links: [
          { name: 'Infant & Toddler Shoes', path: '' },
          { name: "Kid's Shoes ", path: '' },
          { name: "Kid's Jordan Shoes", path: '' },
          { name: "Kid's Basketball Shoes ", path: '' },
        ],
      },
    ];
  }
}
