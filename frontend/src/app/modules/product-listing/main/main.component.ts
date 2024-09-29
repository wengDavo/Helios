import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/product.service';
import { productI } from '../product/product.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductComponent],
  template: `
    <main class="">
      <section class="grid grid-cols-3 gap-y-6">
        @for (item of products; track $index) {
        <app-product [data]="item" />
        }
      </section>
    </main>
  `,
  styles: ``,
})
export class MainComponent implements OnInit {
  private productService = inject(ProductService);
  products!: Array<productI>;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
