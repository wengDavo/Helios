import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="grid gap-y-10">
      <figure class="">
        <img src="images/homeHeroImage.png" alt="" width="1344" height="700" />
      </figure>
      <article class="text-center">
        <p class="font-medium text-sm">First Look</p>
        <h1 class="text-[56px] font-medium uppercase mb-4">
          nike air max pulse
        </h1>
        <div class="text-sm">
          <p>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse
          </p>
          <p>
            —designed to push you past your limits and help you go to the max.
          </p>
        </div>
      </article>
      <article class="flex gap-4 justify-center ">
        <button class="bg-primary-black text-white rounded-[30px] px-5 py-2">Notify Me</button>
        <button class="bg-primary-black text-white rounded-[30px] px-5 py-2">Shop Air Max</button>
      </article>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  
}
