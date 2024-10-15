import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderButtonsComponent } from './slider-buttons.component';

describe('SliderButtonsComponent', () => {
  let component: SliderButtonsComponent;
  let fixture: ComponentFixture<SliderButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
