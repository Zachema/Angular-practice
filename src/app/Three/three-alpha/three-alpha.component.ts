import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThreeAlphaService } from './three-alpha.service';
@Component({
  selector: 'app-three-alpha',
  templateUrl: './three-alpha.component.html',
  styleUrls: ['./three-alpha.component.scss']
})
export class ThreeAlphaComponent implements OnInit {

  @ViewChild('canvas')
  public canvasRef:ElementRef<HTMLCanvasElement>;

  constructor(private engine:ThreeAlphaService) { }

  ngOnInit(): void {
    this.engine.createScene(this.canvasRef);
    this.engine.animate();

  }

}
