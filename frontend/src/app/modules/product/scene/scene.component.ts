import { Component, Input, OnInit } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraph } from '../scene-graph/scene-graph.component';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [NgtCanvas],
  template: `
    <ngt-canvas
      [sceneGraph]="SceneGraph"
      [camera]="$any(cameraOptions)"
    ></ngt-canvas>
  `,
  styles: ``,
})
export class SceneComponent implements OnInit {
  readonly SceneGraph = SceneGraph;

  protected cameraOptions = {
    position: [0, 20, 30],
  };

  ngOnInit(): void {}
}
