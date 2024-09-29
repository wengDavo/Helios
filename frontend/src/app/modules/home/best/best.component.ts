import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
//
import { SliderButtonsComponent } from '../slider-buttons/slider-buttons.component';
import { BestItemComponent } from '../best-item/best-item.component';
import { bestItemI } from '../best-item/best-item.interface';

@Component({
  selector: 'app-best',
  standalone: true,
  imports: [MatIcon, BestItemComponent, SliderButtonsComponent],
  template: `
    <section class="flex p-3 justify-between gap-y-6">
      <h2 class="font-medium text-xl">Best Of Air Max</h2>
      <app-slider-buttons [title]="title"/>
    </section>
    <section class="flex gap-2 overflow-x-auto hide-scrollbar">
      @for (item of featuredItems; track $index) {
      <app-best-item [data]="item" />
      }
    </section>
  `,
  styles: ``,
})
export class BestComponent implements OnInit {
  title: string = 'shop'
  featuredItems!: Array<bestItemI>;
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
