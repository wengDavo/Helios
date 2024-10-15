import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
//
import { BestItemComponent } from '../best-item/best-item.component';
import { productI } from '../../../shared/services/product/product.interface';
//
import { ProductService } from '../../../shared/services/product/product.service';

@Component({
  selector: 'app-best',
  standalone: true,
  imports: [
    MatIcon,
    BestItemComponent,
  ],
  template: `
    <section class="flex p-3 justify-between gap-y-6">
      <h2 class="font-medium text-xl">Best Of Air Max</h2>
    </section>
    <section class="flex gap-2 overflow-x-auto hide-scrollbar">
      @for (item of featuredItems; track $index) {
      <app-best-item [data]="item" />
      }
    </section>
  `,
  styles: ``,
})
export class BestComponent implements OnInit {
  title: string = 'shop';
  featuredItems: Array<productI>;
  protected productServ = inject(ProductService);

  ngOnInit(): void {
    this.featuredItems = this.productServ.getProducts();
  }
}
