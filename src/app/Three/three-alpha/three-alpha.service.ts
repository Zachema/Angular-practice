import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import * as THREE from 'three';
import { Mesh } from 'three';


@Injectable({
  providedIn: 'root'
})
export class ThreeAlphaService implements OnDestroy {

  private canvas: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private light: THREE.AmbientLight;
  private renderer: THREE.WebGLRenderer;


  private cube: Mesh;
  private frameId: number = null;

  constructor() { }

  ngOnDestroy(): void {
  }
}
