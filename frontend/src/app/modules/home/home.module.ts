import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
// 
import { BestComponent } from './best/best.component';
import { BestItemComponent } from './best-item/best-item.component';
import { CtaComponent } from './cta/cta.component';
import { CtaItemComponent } from './cta-item/cta-item.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { FeaturedComponent } from './featured/featured.component';
import { GearComponent } from './gear/gear.component';
import { GearItemComponent } from './gear-item/gear-item.component';
import { HeroComponent } from './hero/hero.component';
import { NoticeComponent } from './notice/notice.component';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[
    BestComponent,
    BestItemComponent,
    CtaComponent,
    CtaItemComponent,
    EssentialsComponent,
    FeaturedComponent,
    GearComponent,
    GearItemComponent,
    HeroComponent,
    NoticeComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
