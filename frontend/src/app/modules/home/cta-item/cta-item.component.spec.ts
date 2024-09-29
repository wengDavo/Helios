import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaItemComponent } from './cta-item.component';

describe('CtaItemComponent', () => {
  let component: CtaItemComponent;
  let fixture: ComponentFixture<CtaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
