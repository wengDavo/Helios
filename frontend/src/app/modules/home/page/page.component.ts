import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
//
import { NoticeComponent } from '../notice/notice.component';
import { HeroComponent } from '../hero/hero.component';
import { BestComponent } from '../best/best.component';
import { FeaturedComponent } from '../featured/featured.component';
import { GearComponent } from '../gear/gear.component';
import { EssentialsComponent } from '../essentials/essentials.component';
import { CtaComponent } from '../cta/cta.component';

//
import { FeaturedService } from '../featured/featured.service';
import { featuredI } from '../featured/featured.interface';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    NoticeComponent,
    HeroComponent,
    BestComponent,
    FeaturedComponent,
    GearComponent,
    EssentialsComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-banner />
    <app-navbar />
    <app-notice />
    <section class="mt-4 mb-14 px-6 space-x-12">
      <app-hero />
      <app-best />
      <app-featured [data]="featredSection" />
      <app-gear />
      <app-featured [data]="dontMissSection" />
      <app-essentials />
      <app-cta />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent implements OnInit {
  private featuredServie = inject(FeaturedService);
  featredSection!: featuredI;
  dontMissSection!: featuredI;

  ngOnInit(): void {
    this.featredSection = this.featuredServie.getFeaturedSection();
    this.dontMissSection = this.featuredServie.getDontMissSection();
  }
}
