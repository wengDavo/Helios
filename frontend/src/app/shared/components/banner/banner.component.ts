import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: `
    <section
      class="bg-primary-white flex py-2 px-3 text-sm items-center justify-between"
    >
      <figure>
        <img src="customIcons/airJordan.svg" alt="" />
      </figure>
      <article class="bg-white p-1 ">
        <button>Skip to main content</button>
      </article>
      <nav class=" self-end">
        <menu class="flex divide-x divide-secondary-black *:px-2">
          <li>Find a Store</li>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign In</li>
        </menu>
      </nav>
    </section>
  `,
  styles: ``,
})
export class BannerComponent {}
