import { Component, Input } from '@angular/core';
import { SliderButtonsComponent } from '../slider-buttons/slider-buttons.component';
import { GearItemComponent } from '../gear-item/gear-item.component';
import { gearUnitI } from './gear-unit.interface';

@Component({
  selector: 'app-gear-unit',
  standalone: true,
  imports: [SliderButtonsComponent, GearItemComponent],
  template: `
    <article class="grid gap-3">
      <div class="ml-auto"><app-slider-buttons [title]="data.title" /></div>
      <div class="flex gap-3 overflow-x-auto hide-scrollbar">
        @for (item of data.gearItems; track $index) {
        <app-gear-item [data]="item"/>
        }
      </div>
    </article>
  `,
  styles: ``,
})
export class GearUnitComponent {
  @Input() data!: gearUnitI;
}
