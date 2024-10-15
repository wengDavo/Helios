import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SceneComponent } from '../scene/scene.component';
import { productInformationI } from '../../../shared/services/product/product-info.interface';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [MatIcon, SceneComponent],
  template: `
    <section class="grid gap-y-10">
      <article class="grid gap-2">
        <div>
          <h2 class=" text-[27px] font-[600] helvetica-nue-italic">
            {{ info.name }}
          </h2>
          <p>Men's shoes</p>
        </div>
        <div class="text-primary-grey text-sm">
          <p class="text-primary-black">Price : ₹ {{ info.price }}</p>
          <p>incl. of taxes</p>
          <p>(Also includes all applicable duties)</p>
        </div>
      </article>
      <article class="grid gap-2">
        <div class="flex justify-between text-sm">
          <p>Select Size</p>
          <p class="text-primary-grey">Size Guide</p>
        </div>
        <div class="grid grid-cols-3 text-sm gap-2">
          @for (size of info.available_sizes; track $index) {
          <p
            class="text-center p-2 rounded-[4px] border border-tetriary-grey hover:border-primary-grey"
          >
            {{ size }}
          </p>
          }
        </div>
      </article>
      <article class="grid gap-1">
        <button
          class=" px-10 py-3 border hover:border-primary-grey  rounded-[30px] bg-gray-200"
          (click)="toggleDialog()"
        >
          <mat-icon class="text-black">view_in_ar</mat-icon>
        </button>
        <dialog
          [open]="dialog"
          (click)="toggleDialog()"
          class="z-10 fixed w-screen h-screen top-0 left-0 bg-transparent"
        >
          <div
            class="z-20 w-[90%] h-[90%] fixed custom top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-tertiary-grey bg-primary-black"
            (click)="$event.stopPropagation()"
          >
            <app-scene />
          </div>
        </dialog>
        <button
          class=" px-10 py-3 border hover:border-primary-grey  rounded-[30px] text-white bg-gray-600"
        >
          Add to Bag
        </button>
        <button
          class=" px-10 py-3 border hover:border-primary-grey  rounded-[30px] text-white bg-gray-400"
        >
          Favorite
        </button>
      </article>
      <article class="helvetica-nue-light">
        <p class="">
          {{ info.description.message }}
        </p>
        <div class="p-4">
          <p>Colour Shown: {{ info.color }}</p>
          <p>Style: {{ info.description.style }}</p>
          <p>Model: {{ info.description.model }}</p>
        </div>
      </article>
      <article>
        <details class="border-t p-2 cursor-pointer relative group">
          <summary class="list-none">
            Delivery & Detail
            <span class="absolute right-0 group-open:rotate-[180deg]">
              <mat-icon>keyboard_arrow_down</mat-icon>
            </span>
          </summary>
          <div>
            <p>Free delivery for purchases above ₹14,000.00</p>
            <p>Standard delivery 4–9 Business Days</p>
          </div>
        </details>
      </article>
    </section>
  `,
  styles: `

  `,
})
export class InformationComponent implements OnInit, AfterViewInit{
  @Input() info: productInformationI;
  dialog = false;

  toggleDialog() {
    this.dialog = !this.dialog;
  }



  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
  }

}
