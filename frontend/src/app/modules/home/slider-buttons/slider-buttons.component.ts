import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-slider-buttons',
  standalone: true,
  imports: [MatIcon],
  template: `
    <div class=" font-medium flex items-center gap-2">
      <p>{{ title }}</p>
      <span class="bg-tertiary-white rounded-full grid justify-center p-1"
        ><mat-icon class="text-tertiary-grey">chevron_left</mat-icon></span
      >
      <span class="bg-tertiary-grey rounded-full grid justify-center p-1"
        ><mat-icon>chevron_right</mat-icon></span
      >
    </div>
  `,
  styles: ``,
})
export class SliderButtonsComponent {
  @Input() title!: string;
}
