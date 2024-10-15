// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [],
//   template: `
//     <p>
//       product works!
//     </p>
//   `,
//   styles: ``
// })
// export class ProductComponent {

// }

import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from '../../../../shared/components/banner/banner.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { GalleryComponent } from '../../gallery/gallery.component';
import { InformationComponent } from '../../information/information.component';
import { ExploreComponent } from '../../explore/explore.component';
import { SimilarComponent } from '../../similar/similar.component';
import { ProductService } from '../../../../shared/services/product/product.service';
import { productI } from '../../../../shared/services/product/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    InformationComponent,
    SimilarComponent,
    ExploreComponent,
  ],
  template: `
    <app-banner />
    <app-navbar />
    <main class="mt-4 mb-14 px-6 space-y-12">
      <section class="grid grid-cols-12 gap-14">
        <app-gallery class="col-span-8 " [images]="product.images.gallery" />
        <app-information class="col-span-4" [info]="product.info" />
      </section>
      <section>
        <app-explore [highlights]="product.images.highlights" />
        <app-similar />
      </section>
    </main>
    <app-footer />
  `,
  styles: ``,
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService)
  product: productI

  ngOnInit(): void {
    this.product = this.productService.getProduct()
  }
}
