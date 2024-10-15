import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
// import { ProductService } from '../product/product.service';
// import { productI } from '../product/product.interface';
import { ProductService } from '../../../shared/services/product/product.service';
import { productI } from '../../../shared/services/product/product.interface';
import { RelatedCategoriesComponent } from '../related-categories/related-categories.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductComponent, RelatedCategoriesComponent],
  template: `
    <main class="grid gap-y-14">
      <section class="grid grid-cols-4 gap-2">
        @for (item of products; track $index) {
        <app-product [data]="item" />
        }
      </section>
      <app-related-categories />
    </main>
  `,
  styles: ``,
})
export class MainComponent implements OnInit {
  private productService = inject(ProductService);
  products: Array<productI>;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
