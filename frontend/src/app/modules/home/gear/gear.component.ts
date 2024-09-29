import { Component, OnInit } from '@angular/core';
import { GearUnitComponent } from '../gear-unit/gear-unit.component';
import { gearUnitI } from '../gear-unit/gear-unit.interface';

@Component({
  selector: 'app-gear',
  standalone: true,
  imports: [GearUnitComponent],
  template: `
    <section class="grid gap-y-6">
      <h2 class="font-medium text-xl">Gear Up</h2>
      <div class="grid grid-cols-2 gap-8">
        @for (item of gearUnits; track $index) {
        <app-gear-unit [data]="item" />
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class GearComponent implements OnInit {
  title: string = 'Gear Up';
  gearUnits!: Array<gearUnitI>;

  ngOnInit(): void {
    this.gearUnits = [
      {
        title: `Shop Men's`,
        gearItems: [
          {
            image_url: 'images/homeGearItem.png',
            name: 'Nike Dri-FIT ADV TechKnit Ultra',
            category: "Men's Shirt",
            price: 3895,
            type: 'Short-Sleeve Running Top',
          },
          {
            image_url: 'images/homeGearItem.png',
            name: 'Nike Dri-FIT ADV TechKnit Ultra',
            category: "Men's Shirt",
            price: 3895,
            type: 'Short-Sleeve Running Top',
          },
        ],
      },
      {
        title: `Shop Women's`,
        gearItems: [
          {
            image_url: 'images/homeGearItem.png',
            name: 'Nike Dri-FIT ADV TechKnit Ultra',
            category: "Men's Shirt",
            price: 3895,
            type: 'Short-Sleeve Running Top',
          },
          {
            image_url: 'images/homeGearItem.png',
            name: 'Nike Dri-FIT ADV TechKnit Ultra',
            category: "Men's Shirt",
            price: 3895,
            type: 'Short-Sleeve Running Top',
          },
        ],
      },
    ];
  }
}
