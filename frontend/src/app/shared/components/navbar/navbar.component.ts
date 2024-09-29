import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon],
  template: `
    <section class="flex items-center justify-between">
      <figure>
        <img src="customIcons/logo.svg" alt="" />
      </figure>
      <nav>
        <menu class="flex gap-6">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </menu>
      </nav>
      <article class="flex items-center gap-4">
        <form class="bg-primary-white p-1 flex items-center rounded-3xl">
          <span class="self-center inline-block pt-2"
            ><mat-icon>search</mat-icon></span
          >
          <input
            type="search"
            class="bg-inherit outline-none"
            placeholder="Search"
            list="test"
          />
          <datalist id="test">
            <option value="Men"></option>
            <option value="Women"></option>
            <option value="Kids"></option>
          </datalist>
        </form>
        <div class="flex gap-4">
          <span><mat-icon class="text-primary-grey">favorite</mat-icon></span>
          <span
            ><mat-icon class="text-primary-grey">shopping_bag</mat-icon></span
          >
        </div>
      </article>
    </section>
  `,
  styles: ``,
})
export class NavbarComponent {}
