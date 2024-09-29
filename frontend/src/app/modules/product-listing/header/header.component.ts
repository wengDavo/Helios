import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon],
  template: `
    <header class="flex justify-between">
      <h2 class="font-medium text-2xl">New (500)</h2>
      <section class="flex gap-x-4">
        <article class="flex gap-1 items-center">
          Hide Filters
          <mat-icon>tune</mat-icon>
        </article>
        <article class="flex gap-1 items-center">
          <Label>Sort by</Label>
          <select name="sort-by" id="sort-by" class="outline-none">
            <option value=""></option>
            <option value="Test">Test</option>
            <option value="Test">Test</option>
            <option value="Test">Test</option>
          </select>
        </article>
      </section>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
