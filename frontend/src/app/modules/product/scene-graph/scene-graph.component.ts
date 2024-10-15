import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  extend,
  NgtBeforeRenderEvent,
  NGT_STORE,
  NgtArgs,
  injectLoader,
  injectBeforeRender,
} from 'angular-three';
import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

extend(three);
extend({ OrbitControls });
extend({ GLTFLoader });

@Component({
  selector: '',
  standalone: true,
  imports: [NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ngt-ambient-light />
    <ngt-directional-light />
    @if (gltfModel(); as gltf) {
    <ngt-primitive *args="[gltf.scene]" [position]="[0, 0, 0]" #model />
    }
    <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
  `,
  styles: ``,
})
export class SceneGraph implements OnInit {
  // @Input() modelGLB: string;
  
  private readonly store = inject(NGT_STORE);
  readonly camera = this.store.get('camera');
  readonly glDom = this.store.get('gl', 'domElement');
  modelGLB: string;

  protected gltfModel = injectLoader(
    () => GLTFLoader,
    () => 'models/ice_age_fantasy_world_sneaker_rtfktchallenge.glb'
  );

  constructor() {
    console.log("State:"+ this.store.snapshot)
  }

  ngOnInit(): void {}
}
