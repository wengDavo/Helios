import { Component, inject, OnInit } from '@angular/core';
import { FiltersService } from './filters.service';
import { filtersCategorizationI } from './filters-categorization.interface';
import { MatIcon } from '@angular/material/icon';
import { HeaderService } from '../header/header.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatIcon, AsyncPipe],
  template: `
    @if (showFilter$ | async ) {
    <aside class="grid gap-4 font-medium ">
      <menu class="grid gap-y-1">
        @for (item of filters; track $index) {
        <li class="capitalize">{{ item }}</li>
        }
      </menu>
      <section>
        @for (item of filtersCategorizations; track $index) {
        <details class="border-t p-2 cursor-pointer relative group">
          <summary class="list-none">
            {{ item.catgegorization }}
            <span class="absolute right-0 group-open:rotate-[180deg]">
              <mat-icon>keyboard_arrow_down</mat-icon>
            </span>
          </summary>
          <div class="grid">
            @for (type of item.types; track $index) {
            <label for="">
              <input
                type="checkbox"
                [name]="type"
                [id]="item.catgegorization"
              />
              {{ type }}
            </label>
            }
          </div>
        </details>
        }
      </section>
    </aside>
    }
  `,
  styles: ``,
})
export class FiltersComponent implements OnInit {
  private filterService = inject(FiltersService);
  private headerService = inject(HeaderService);

  filters!: Array<string>;
  filtersCategorizations!: Array<filtersCategorizationI>;

  showFilter$ = this.headerService.filterState$;

  ngOnInit(): void {
    this.filters = this.filterService.getFilters();
    this.filtersCategorizations = this.filterService.getFiltersCategorization();
  }
}
