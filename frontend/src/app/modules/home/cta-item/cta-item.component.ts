import { Component, Input } from '@angular/core';
import { navigationItemI } from '../../../shared/interfaces/navigation-item.interface';

@Component({
  selector: 'app-cta-item',
  standalone: true,
  imports: [],
  template: `
    <article class="grid gap-y-6">
      <h3 class="font-medium">{{ data.title }}</h3>
      <menu class="grid gap-y-3">
        @for (item of data.links; track $index) {
        <li class="text-primary-grey text-sm">{{ item.name }}</li>
        }
      </menu>
    </article>
  `,
  styles: ``,
})
export class CtaItemComponent {
  @Input() data!: navigationItemI;
}
