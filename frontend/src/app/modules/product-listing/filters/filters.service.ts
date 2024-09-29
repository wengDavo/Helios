import { Injectable } from '@angular/core';
import { filtersCategorizationI } from './filters-categorization.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor() {}

  getFilters() {
    return [
      'shoes',
      'Sport bras',
      'Tops & T-Shirts',
      'Hoodies & Sweactshirts',
      'Jackets',
      'Trousers & Tights',
      'Shorts',
      'Tracksuits',
      'Jumpsuits & Rompers',
      'Skirts & Dresses',
      'Socks',
      'Accessories & Equipment',
    ];
  }

  getFiltersCategorization(): Array<filtersCategorizationI> {
    return [
      { catgegorization: 'Gender', types: ['Male', 'Female', 'Unisex'] },
      { catgegorization: 'Kids', types: ['Boys', 'Girls'] },
      { catgegorization: 'Price', types: ['Under 25,000', 'Above 25,000'] },
    ];
  }
}
