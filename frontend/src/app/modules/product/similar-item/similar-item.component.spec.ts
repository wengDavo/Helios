import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarItemComponent } from './similar-item.component';

describe('SimilarItemComponent', () => {
  let component: SimilarItemComponent;
  let fixture: ComponentFixture<SimilarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
