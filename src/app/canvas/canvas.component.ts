import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;

  drawHouse(): void {
    var ctx = this.canvas.nativeElement.getContext('2d')

    var canvas_W = this.canvas.nativeElement.width,
        canvas_H = this.canvas.nativeElement.height;

    ctx.beginPath();
    ctx.fillStyle = '#000';                         // NIGHT SKY (ADD COLOR BLACK).
    ctx.fillRect(0, 0, canvas_W, canvas_H);         // FILL THE CANVAS.

    // ADD NIGHT STARS.
    for (var i = 0; i < 100; i++) {
        ctx.fillStyle = '#FFF';                     // COLOR IT BRIGHT.

        ctx.fillRect(Math.floor(Math.random() * canvas_W),
            Math.floor(Math.random() * canvas_H), 1, 1);
    }
    console.log(ctx.canvas.toDataURL())
  }

  constructor() { }

  ngOnInit() {
    this.drawHouse();
  }
}
