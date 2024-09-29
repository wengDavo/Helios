import { Component, inject, OnInit } from '@angular/core';
import { CtaItemComponent } from '../cta-item/cta-item.component';
import { CtaItemService } from '../cta-item/cta-item.service';
import { navigationItemI } from '../../../shared/interfaces/navigation-item.interface';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CtaItemComponent],
  template: `
    <nav class="grid grid-cols-4 px-32">
      @for (item of ctaItems; track $index) {
      <app-cta-item [data]="item" />
      }
    </nav>
  `,
  styles: ``,
})
export class CtaComponent implements OnInit {
  ctaItems!: Array<navigationItemI>;
  private ctaItemService = inject(CtaItemService);

  ngOnInit(): void {
    this.ctaItems = this.ctaItemService.getCtaItems();
  }
}
