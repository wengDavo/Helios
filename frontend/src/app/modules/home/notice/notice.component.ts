import { Component, inject } from '@angular/core';
import { appname } from '../../../core/services/appname.config';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [],
  template: `
    <section class="text-center grid gap-1 bg-primary-white p-4">
      <h1 class="text-lg">Hello {{ appname }} App</h1>
      <p class="text-xs">
        Download the app to access evverything {{ appname }}.
        <a class="underline">GET YOUR GEAR</a>
      </p>
    </section>
  `,
  styles: ``,
})
export class NoticeComponent {
  appname = inject(appname);
}
