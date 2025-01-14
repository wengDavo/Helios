import { Component, Input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-slider-buttons',
  standalone: true,
  imports: [MatIcon],
  template: `
    <div class="font-medium flex items-center gap-2">
      <p>{{ title }}</p>
      <span
        class="bg-tertiary-white rounded-full grid justify-center p-1 cursor-pointer"
        (click)="outputLeft()"
        ><mat-icon class="text-secondary-grey">chevron_left</mat-icon></span
      >
      <span
        class="bg-secondary-grey rounded-full grid justify-center p-1 cursor-pointer"
        (click)="outputRight()"
        ><mat-icon>chevron_right</mat-icon></span
      >
    </div>
  `,
  styles: ``,
})
export class SliderButtonsComponent {
  @Input() title!: string;

  left = output<string>();
  right = output<string>();
  
  outputLeft() {
    this.left.emit('left clicked');
  }
  outputRight() {
    this.right.emit('right clicked');
  }
}
