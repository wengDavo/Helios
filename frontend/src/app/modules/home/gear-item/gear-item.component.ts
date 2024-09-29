import { Component, Input } from '@angular/core';
import { bestItemI } from '../best-item/best-item.interface';

@Component({
  selector: 'app-gear-item',
  standalone: true,
  imports: [],
  template: `
    <article class="w-fit grid gap-2 min-w-[300px]">
      <figure>
        <img [src]="data.image_url" alt="an item" width="300" height="300" />
      </figure>
      <div class="flex justify-between ">
        <div class="text-sm">
          <p>{{ data.name }}</p>
          <p class="text-primary-grey text-xs">{{ data.category }}</p>
          <p class="text-primary-grey text-xs">{{ data.type }}</p>
        </div>
        <p>{{ data.price }}</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class GearItemComponent {
  @Input() data!: bestItemI;
}
