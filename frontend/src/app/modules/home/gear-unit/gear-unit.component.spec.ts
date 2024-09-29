import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearUnitComponent } from './gear-unit.component';

describe('GearUnitComponent', () => {
  let component: GearUnitComponent;
  let fixture: ComponentFixture<GearUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
