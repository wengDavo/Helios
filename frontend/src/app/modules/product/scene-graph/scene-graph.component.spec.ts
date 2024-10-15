import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneGraphComponent } from './scene-graph.component';

describe('SceneGraphComponent', () => {
  let component: SceneGraphComponent;
  let fixture: ComponentFixture<SceneGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceneGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceneGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
