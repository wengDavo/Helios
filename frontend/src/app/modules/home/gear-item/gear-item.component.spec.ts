import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearItemComponent } from './gear-item.component';

describe('GearItemComponent', () => {
  let component: GearItemComponent;
  let fixture: ComponentFixture<GearItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
