import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { GearItemComponent } from '../gear-item/gear-item.component';
import { productI } from '../../../shared/services/product/product.interface';
@Component({
  selector: 'app-gear',
  standalone: true,
  imports: [GearItemComponent, SliderComponent],
  template: `
    <section class="grid gap-y-6">
      <h2 class="font-medium text-xl">Gear Up</h2>
      <div class="grid grid-cols-2 gap-8">
        @for (item of gearUnits; track $index) {
        <app-slider [title]="item.title">
          @for (gear of item.gearItems; track $index) {
          <app-gear-item [data]="gear" #sliderItem />
          }
        </app-slider>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class GearComponent implements OnInit {
  protected title: string = 'Gear Up';
  protected gearUnits: Array<{
    title: string
    gearItems: Array<productI>
  }>;
  private prodServ = inject(ProductService);

  ngOnInit(): void {
    let gearItems = this.prodServ.getProducts();
    this.gearUnits = [
      {
        title: `Shop Men's`,
        gearItems: [...gearItems],
      },
      {
        title: `Shop Women's`,
        gearItems: [...gearItems],
      },
    ];
  }
}
