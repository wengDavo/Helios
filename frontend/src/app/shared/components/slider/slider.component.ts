import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  signal,
} from '@angular/core';
import { SliderButtonsComponent } from './slider-buttons/slider-buttons.component';
import { NgStyle } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SliderButtonsComponent, NgStyle],
  animations:[
    trigger('Slide',[
      state('slide', style({
        transform: `translateX(-${1 * 100}%)`
      })),
      transition('* <=> *', [animate('1s')])
    ])
  ],
  template: `
    <section class="grid gap-y-3">
      <article class="ml-auto">
        <app-slider-buttons
          [title]="title"
          (right)="next($event)"
          (left)="prev($event)"
        />
      </article>
      <article class="flex gap-3 overflow-x-auto hide-scrollbar" [@Slide]='true'>
        <ng-content></ng-content>
      </article>
    </section>
  `,
  styles: ``,
})
export class SliderComponent implements OnInit, AfterContentInit {
  @ContentChildren('sliderItem') sliderItems: QueryList<any>;
  @Input() title: string;
  current = signal(0);
  // protected current = signal(1);
  transform = `translateX(-${this.current() * 100}%)`;
  // protected transform: string = `translateX(-1000%)`;

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    // console.log(this.sliderItems);
  }

  next($event: any) {
    // console.log('right clicked: ', this.current);
    // console.log(this.current());
    if (this.current() === this.sliderItems.length - 1) {
      this.current.set(0);
      return;
    }
    this.current.update((value) => value + 1);
  }

  prev($event: any) {
    // console.log('left clicked: ', this.current);
    // console.log(this.transform);
    if (this.current() === 0) {
      this.current.set(this.sliderItems.length - 1);
      return;
    }
    this.current.update((value) => value - 1);
  }
}
