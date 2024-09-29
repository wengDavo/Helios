import { Component, Input } from '@angular/core';
import { featuredI } from './featured.interface';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  template: `
    <section class="grid gap-y-6">
      <h2 class="font-medium text-xl capitalize">{{data.title}}</h2>
      <figure>
        <img [src]="data.image" alt="" width="1344" height="700"/>
      </figure>
      <article class="text-center mt-4">
        <h3 class="text-[36px] font-medium uppercase">
          {{data.message}}
        </h3>
        <p class="text-sm mb-4">
          {{data.description}}
        </p>
        <button class="bg-primary-black text-white rounded-[30px] px-5 py-2 w-fit mx-auto">
          {{data.button_decription}}
        </button>
      </article>
    </section>
  `,
  styles: ``,
})
export class FeaturedComponent {
  @Input() data!: featuredI
}
