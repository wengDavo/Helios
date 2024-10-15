import { Component, Input } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SceneComponent],
  template: `
    <figure class="grid grid-cols-2 gap-2 ">
      @for (image_url of images; track $index) {
        <img
        [src]="image_url"
        alt=""
        width="420"
        height="524"
        class="w-[420px] h-[524px]"
        loading="lazy"
      />
      }
    </figure>
  `,
  styles: ``,
})
export class GalleryComponent {
  @Input() images: Array<string>
}
