import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon],
  template: `
    <header class="flex justify-between px-6 gap-y-10 mt-4">
      <h2 class="font-medium text-2xl helvetice-nue-light">New (500)</h2>
      <section class="flex gap-x-4">
        <article class="flex gap-1 items-center justify-center">
          <p>Hide Filters</p>
          <button (click)="toggleFilter()">
            <mat-icon>tune</mat-icon>
          </button>
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
export class HeaderComponent {
  private headerService = inject(HeaderService);

  toggleFilter() {
    this.headerService.toggleFilterState();
  }
}
