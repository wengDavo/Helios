import { Component } from '@angular/core';
import { SimilarItemComponent } from '../similar-item/similar-item.component';
import { similarItemI } from '../similar-item/similar-item.interface';

@Component({
  selector: 'app-similar',
  standalone: true,
  imports: [SimilarItemComponent],
  template: `
    <section class="space-y-4">
      <div>
        {{ title }}
      </div>
      <article class="flex gap-2 overflow-x-auto hide-scrollbar">
        @for (item of featuredItems; track $index) {
        <app-similar-item [data]="item" />
        }
      </article>
    </section>
  `,
  styles: ``,
})
export class SimilarComponent {
  title: string = 'You Might Also Like';
  featuredItems!: Array<similarItemI>;
  ngOnInit(): void {
    this.featuredItems = [
      {
        image_url: 'images/shoeImage.png',
        name: 'Nike Air Max Pulse',
        category: "Women's shoes",
        price: 13955,
      },
      {
        image_url: 'images/shoeImage.png',
        name: 'Nike Air Max Pulse',
        category: "Men's shoes",
        price: 13955,
      },
      {
        image_url: 'images/shoeImage.png',
        name: 'Nike Air Max 97 SE',
        category: "Men's shoes",
        price: 16955,
      },
      {
        image_url: 'images/shoeImage.png',
        name: 'Nike Air Max 97 SE',
        category: "Men's shoes",
        price: 16955,
      },
      {
        image_url: 'images/shoeImage.png',
        name: 'Nike Air Max 97 SE',
        category: "Men's shoes",
        price: 16955,
      },
      {
        image_url: 'images/shoeImage.png',
        name: 'Nike Air Max 97 SE',
        category: "Men's shoes",
        price: 16955,
      },
    ];
  }
}
