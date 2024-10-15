import { Component, Input } from '@angular/core';
import { similarItemI } from './similar-item.interface';

@Component({
  selector: 'app-similar-item',
  standalone: true,
  imports: [],
  template: `
    <article class="grid gap-2 min-w-[250px]">
      <figure>
        <img [src]="data.image_url" alt="an item" width="250" height="250" class="w-[250px] h-[250px]" loading="lazy" />
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
export class SimilarItemComponent {
  @Input() data!: similarItemI;
}
