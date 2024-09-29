import { Component, inject, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { navigationItemI } from '../../interfaces/navigation-item.interface';
import { MatIcon } from '@angular/material/icon';
import { appname } from '../../../core/services/appname.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIcon],
  template: `
    <footer class="bg-primary-black text-secondary-grey pt-10 pb-2 px-8 grid gap-y-6">
      <section class="grid grid-cols-2">
        <article class="grid grid-cols-3 gap-x-3">
          @for (item of footerLinks; track $index) {
          <div class="grid gap-y-4 text-sm capitalize">
            <h3 class="font-medium text-white">{{ item.title }}</h3>
            <menu class="grid gap-y-3">
              @for (item of item.links; track $index) {
              <li class="text-secondary-grey">{{ item.name }}</li>
              }
            </menu>
          </div>
          }
        </article>
        <article class="flex items-start gap-4 justify-end">
          <span
            class="bg-secondary-grey p-1 grid placecontent-center w-fit rounded-full"
            ><mat-icon class="text-primary-black">eco</mat-icon></span
          >
          <span
            class="bg-secondary-grey p-1 grid placecontent-center w-fit rounded-full"
            ><mat-icon class="text-primary-black">rocket_launch</mat-icon></span
          >
          <span
            class="bg-secondary-grey p-1 grid placecontent-center w-fit rounded-full"
            ><mat-icon class="text-primary-black">explore</mat-icon></span
          >
          <span
            class="bg-secondary-grey p-1 grid placecontent-center w-fit rounded-full"
            ><mat-icon class="text-primary-black">sailing</mat-icon></span
          >
        </article>
      </section>
      <section class="flex justify-between text-sm">
        <article class="flex">
          <!-- <span class="text-white"><mat-icon>location_on</mat-icon>Active</span> -->
          <p class="text-white"> &commat; {{ cuurentYear }} {{ appname }}. Inc. All Rights Reesevred</p>
        </article>
        <menu class="capitalize flex gap-3">
          <li>Guides</li>
          <li>terms of use</li>
          <li>terms of sale</li>
          <li>{{appname}} privacy policy</li>
        </menu>
      </section>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent implements OnInit {
  private footerService = inject(FooterService);
  footerLinks!: Array<navigationItemI>;
  appname = inject(appname);
  date = new Date();
  cuurentYear = this.date.getFullYear();

  ngOnInit(): void {
    this.footerLinks = this.footerService.getFooterLinks();
  }
}
