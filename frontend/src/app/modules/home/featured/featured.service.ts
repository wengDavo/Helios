import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturedService {
  constructor() {}

  getFeaturedSection() {
    return {
      title: 'featured',
      image: '/images/homeFeaturedImage.png',
      message: 'step into what feels good',
      description: `Because everyone should know the feeling of
              running in that perfect pair`,
      button_decription: 'Find Your Shoes',
    };
  }

  getDontMissSection() {
    return {
      title: `Don't Miss`,
      image: '/images/homeDontMiss.png',
      message: 'flight essentials',
      description: `Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.`,
      button_decription: 'Shop',
    };
  }

}
