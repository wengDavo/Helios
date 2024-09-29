import { Component, Input } from '@angular/core';
import { bestItemI } from './best-item.interface';

@Component({
  selector: 'app-best-item',
  standalone: true,
  imports: [],
  template: `
    <article class="w-fit grid gap-2 min-w-[341px]">
      <figure>
        <img [src]="data.image_url" alt="an item" width="441" height="441" />
      </figure>
      <div class="flex justify-between ">
        <div>
          <p>{{ data.name }}</p>
          <p class="text-primary-grey text-xs">{{ data.category }}</p>
        </div>
        <p>{{ data.price }}</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class BestItemComponent {
  @Input() data!: bestItemI;
}
