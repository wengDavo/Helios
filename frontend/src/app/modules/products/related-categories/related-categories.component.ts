import { Component } from '@angular/core';

@Component({
  selector: 'app-related-categories',
  standalone: true,
  imports: [],
  template: `
    <section class="grid gap-y-4 border-t border-secondary-grey pt-10">
      <h2 class="font-medium text-2xl">Related Categories</h2>
      <article class="flex flex-wrap gap-2 text-sm">
        @for (item of relatedCategories; track $index) {
          <div class=" px-6 py-1 border border-secondary-grey w-fit rounded-3xl">{{item}}</div>
        }
      </article>
    </section>
  `,
  styles: ``,
})
export class RelatedCategoriesComponent {
  relatedCategories: Array<string> = [
    'Best Selling Products',
    'Best Shoes',
    'New Basketball Shoes',
    'New Football Shoes',
    'New Men\'s Shoes',
    'New Running Shoes',
    'Best Men\'s Shoes',
    'New Jordan Shoes',
    'Best Women\'s Shoes',
    'Best Training & Gym'
  ]
}
