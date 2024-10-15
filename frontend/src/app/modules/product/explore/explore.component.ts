import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  template: `
    <section class="">
      <article class="grid gap-y-16 text-xl place-content-center mb-16">
        <h3 class="text-center ">Explore the Nike Air Max 97 SE Men's Shoes</h3>
        @for (item of highlights; track $index) {
        <figure class="grid gap-y-16 mx-auto">
          <img
            src="images/home/dontMiss.png"
            [src]="item.image_url"
            alt=""
            width="1303"
            height="600"
            class="w-[1303px] h-[600px]"
            loading="lazy"
          />
          <figcaption class="text-center">
            {{ item.message }}
          </figcaption>
        </figure>
        }
      </article>
    </section>
  `,
  styles: ``,
})
export class ExploreComponent implements OnInit {
  @Input() highlights: Array<{ image_url: string; message: string }>;

  ngOnInit(): void {}
}
