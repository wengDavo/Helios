import { Component } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
//
import { HeaderComponent } from '../header/header.component';
import { FiltersComponent } from '../filters/filters.component';
import { MainComponent } from '../main/main.component';
import { RelatedCategoriesComponent } from '../related-categories/related-categories.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    FiltersComponent,
    MainComponent,
    HeaderComponent,
    RelatedCategoriesComponent
],
  template: `
    <app-banner />
    <app-navbar />
    <!-- <section class="grid grid-cols-12 mt-4 mb-14 px-6 space-x-12"> -->
    <section class="grid grid-cols-12 gap-x-20 px-6 gap-y-10 mb-14">
      <app-header class="col-span-12" />
      <app-filters class="col-span-2" />
      <app-main class="col-span-10" />
      <app-related-categories class="col-start-3 col-end-13"/>
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent {}
