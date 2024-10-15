import { Injectable } from '@angular/core';
import { productI } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(): productI{
    return {
      images: {
        main: 'images/shoeImage.png',
        gallery: [
          'images/shoeImage.png',
          'images/shoeImage.png',
          'images/shoeImage.png',
          'images/shoeImage.png',
          'images/shoeImage.png',
          'images/shoeImage.png',
        ],
        highlights: [
          {
            image_url: 'images/home/dontMiss.png',
            message: `Originally designed for performance running, the full-length Max Air
              unit adds soft cushioning.`,
          },
          {
            image_url: 'images/home/dontMiss.png',
            message: `Originally designed for performance running, the full-length Max Air
              unit adds soft cushioning.`,
          },
          {
            image_url: 'images/home/dontMiss.png',
            message: `Originally designed for performance running, the full-length Max Air
              unit adds soft cushioning.`,
          },
        ],
      },
      info: {
        name: 'Nike Air Max 97 SE',
        category: "Men's",
        price: '16 99500',
        model_glb_url:
          'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
        type: 'shoes',
        status: 'available',
        color: {
          name: 'Flat Pewter/Light Bone/Black/White',
          available_number: 10,
        },
        available_sizes: [
          'UK 6 (EU 40)',
          'UK 6.5',
          'UK 7',
          'UK 7.5',
          'UK 8',
          'UK 8.5',
          'UK 9',
          'UK 9.5',
          'UK 10',
          'UK 10.5',
          'UK 11',
          'UK 11.5',
          'UK 12',
        ],
        description: {
          message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
          update the iconic design while the original look (inspired by Japanese
          bullet trains and water droplets) still takes centre stage.
          Easy-to-style colours let you hit the streets quickly.`,

          style: 'DV7421-001',
          model: '9791739124',
        },
      },
      similar_items: [],
    }
  }
  getProducts(): Array<productI> {
    return [
      {
        images: {
          main: 'images/shoeImage.png',
          gallery: [
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
          ],
          highlights: [
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
          ],
        },
        info: {
          name: 'Nike Air Max 97 SE',
          category: "Men's",
          price: '16 99500',
          model_glb_url:
            'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
          type: 'shoes',
          status: 'available',
          color: {
            name: 'Flat Pewter/Light Bone/Black/White',
            available_number: 10,
          },
          available_sizes: [
            'UK 6 (EU 40)',
            'UK 6.5',
            'UK 7',
            'UK 7.5',
            'UK 8',
            'UK 8.5',
            'UK 9',
            'UK 9.5',
            'UK 10',
            'UK 10.5',
            'UK 11',
            'UK 11.5',
            'UK 12',
          ],
          description: {
            message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
            update the iconic design while the original look (inspired by Japanese
            bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.`,

            style: 'DV7421-001',
            model: '9791739124',
          },
        },
        similar_items: [],
      },
      {
        images: {
          main: 'images/shoeImage.png',
          gallery: [
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
          ],
          highlights: [
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
          ],
        },
        info: {
          name: 'Nike Air Max 97 SE',
          category: "Men's",
          price: '16 99500',
          model_glb_url:
            'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
          type: 'shoes',
          status: 'available',
          color: {
            name: 'Flat Pewter/Light Bone/Black/White',
            available_number: 10,
          },
          available_sizes: [
            'UK 6 (EU 40)',
            'UK 6.5',
            'UK 7',
            'UK 7.5',
            'UK 8',
            'UK 8.5',
            'UK 9',
            'UK 9.5',
            'UK 10',
            'UK 10.5',
            'UK 11',
            'UK 11.5',
            'UK 12',
          ],
          description: {
            message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
            update the iconic design while the original look (inspired by Japanese
            bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.`,

            style: 'DV7421-001',
            model: '9791739124',
          },
        },
        similar_items: [],
      },
      {
        images: {
          main: 'images/shoeImage.png',
          gallery: [
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
          ],
          highlights: [
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
          ],
        },
        info: {
          name: 'Nike Air Max 97 SE',
          category: "Men's",
          price: '16 99500',
          model_glb_url:
            'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
          type: 'shoes',
          status: 'available',
          color: {
            name: 'Flat Pewter/Light Bone/Black/White',
            available_number: 10,
          },
          available_sizes: [
            'UK 6 (EU 40)',
            'UK 6.5',
            'UK 7',
            'UK 7.5',
            'UK 8',
            'UK 8.5',
            'UK 9',
            'UK 9.5',
            'UK 10',
            'UK 10.5',
            'UK 11',
            'UK 11.5',
            'UK 12',
          ],
          description: {
            message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
            update the iconic design while the original look (inspired by Japanese
            bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.`,

            style: 'DV7421-001',
            model: '9791739124',
          },
        },
        similar_items: [],
      },
      {
        images: {
          main: 'images/shoeImage.png',
          gallery: [
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
          ],
          highlights: [
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
          ],
        },
        info: {
          name: 'Nike Air Max 97 SE',
          category: "Men's",
          price: '16 99500',
          model_glb_url:
            'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
          type: 'shoes',
          status: 'available',
          color: {
            name: 'Flat Pewter/Light Bone/Black/White',
            available_number: 10,
          },
          available_sizes: [
            'UK 6 (EU 40)',
            'UK 6.5',
            'UK 7',
            'UK 7.5',
            'UK 8',
            'UK 8.5',
            'UK 9',
            'UK 9.5',
            'UK 10',
            'UK 10.5',
            'UK 11',
            'UK 11.5',
            'UK 12',
          ],
          description: {
            message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
            update the iconic design while the original look (inspired by Japanese
            bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.`,

            style: 'DV7421-001',
            model: '9791739124',
          },
        },
        similar_items: [],
      },
      {
        images: {
          main: 'images/shoeImage.png',
          gallery: [
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
          ],
          highlights: [
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
          ],
        },
        info: {
          name: 'Nike Air Max 97 SE',
          category: "Men's",
          price: '16 99500',
          model_glb_url:
            'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
          type: 'shoes',
          status: 'available',
          color: {
            name: 'Flat Pewter/Light Bone/Black/White',
            available_number: 10,
          },
          available_sizes: [
            'UK 6 (EU 40)',
            'UK 6.5',
            'UK 7',
            'UK 7.5',
            'UK 8',
            'UK 8.5',
            'UK 9',
            'UK 9.5',
            'UK 10',
            'UK 10.5',
            'UK 11',
            'UK 11.5',
            'UK 12',
          ],
          description: {
            message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
            update the iconic design while the original look (inspired by Japanese
            bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.`,

            style: 'DV7421-001',
            model: '9791739124',
          },
        },
        similar_items: [],
      },
      {
        images: {
          main: 'images/shoeImage.png',
          gallery: [
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
            'images/shoeImage.png',
          ],
          highlights: [
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
            {
              image_url: 'images/home/dontMiss.png',
              message: `Originally designed for performance running, the full-length Max Air
                unit adds soft cushioning.`,
            },
          ],
        },
        info: {
          name: 'Nike Air Max 97 SE',
          category: "Men's",
          price: '16 99500',
          model_glb_url:
            'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb',
          type: 'shoes',
          status: 'available',
          color: {
            name: 'Flat Pewter/Light Bone/Black/White',
            available_number: 10,
          },
          available_sizes: [
            'UK 6 (EU 40)',
            'UK 6.5',
            'UK 7',
            'UK 7.5',
            'UK 8',
            'UK 8.5',
            'UK 9',
            'UK 9.5',
            'UK 10',
            'UK 10.5',
            'UK 11',
            'UK 11.5',
            'UK 12',
          ],
          description: {
            message: ` Layer on style with the Air Max 97. The cracked leather and soft suede
            update the iconic design while the original look (inspired by Japanese
            bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.`,

            style: 'DV7421-001',
            model: '9791739124',
          },
        },
        similar_items: [],
      },
    ];
  }
}
