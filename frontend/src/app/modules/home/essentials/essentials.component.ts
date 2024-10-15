import { Component } from '@angular/core';

@Component({
  selector: 'app-essentials',
  standalone: true,
  imports: [],
  template: `
    <section class="grid gap-y-6">
      <h2 class="font-medium text-xl capitalize">The essentials</h2>
      <article class="grid grid-cols-3 gap-2">
        <figure class="relative">
          <img
            src="/images/home/essentials1.png"
            alt="essentials"
            width="440"
            height="540"
            loading="lazy"
          />
          <figcaption
            class="bg-white absolute bottom-8 left-6 rounded-3xl px-5 py-2"
          >
            Men's
          </figcaption>
        </figure>
        <figure class="relative">
          <img
            src="/images/home/essentials2.png"
            alt="essentials"
            width="440"
            height="540"
            loading="lazy"
          />
          <figcaption
            class="bg-white absolute bottom-8 left-6 rounded-3xl px-5 py-2"
          >
            Women's
          </figcaption>
        </figure>
        <figure class="relative">
          <img
            src="/images/home/essentials3.png"
            alt="essentials"
            width="440"
            height="540"
            loading="lazy"
          />
          <figcaption
            class="bg-white absolute bottom-8 left-6 rounded-3xl px-5 py-2"
          >
            Kid's
          </figcaption>
        </figure>
      </article>
    </section>
  `,
  styles: ``,
})
export class EssentialsComponent {}
