import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCategoriesComponent } from './related-categories.component';

describe('RelatedCategoriesComponent', () => {
  let component: RelatedCategoriesComponent;
  let fixture: ComponentFixture<RelatedCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
