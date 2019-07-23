import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-link',
  templateUrl: './projects-link.component.html',
  styleUrls: ['./projects-link.component.css']
})
export class ProjectsLinkComponent implements OnInit {

  upAndDown1(): any {
    var link1 = document.getElementById('link1');
    var counter = 0;
    var colors = ['#38CCCD', '#111111', '#2FCC40', '#111111', '#FF4036', '#111111', '#FF851B', '#111111', '#B10DC9', '#111111']

    setInterval(function(): void {
      if (counter > 9) {
      counter = 0;
      link1.style.backgroundColor = colors[counter];
      } else {
      counter += 1;
      link1.style.backgroundColor = colors[counter];
      }
    }, 1000)
  }

  upAndDown2(): any {
    var link1 = document.getElementById('link2');
    var counter = 0;
    var colors = ['#38CCCD', '#111111', '#2FCC40', '#111111', '#FF4036', '#111111', '#FF851B', '#111111', '#B10DC9', '#111111']

    setInterval(function(): void {
      if (counter > 9) {
      counter = 0;
      link1.style.backgroundColor = colors[counter];
      } else {
      counter += 1;
      link1.style.backgroundColor = colors[counter];
      }
    }, 1000)
  }

  upAndDown3(): any {
    var link1 = document.getElementById('link3');
    var counter = 0;
    var colors = ['#38CCCD', '#111111', '#2FCC40', '#111111', '#FF4036', '#111111', '#FF851B', '#111111', '#B10DC9', '#111111']

    setInterval(function(): void {
      if (counter > 9) {
      counter = 0;
      link1.style.backgroundColor = colors[counter];
      } else {
      counter += 1;
      link1.style.backgroundColor = colors[counter];
      }
    }, 1000)
  }

  upAndDown4(): any {
    var link1 = document.getElementById('link4');
    var counter = 0;
    var colors = ['#38CCCD', '#111111', '#2FCC40', '#111111', '#FF4036', '#111111', '#FF851B', '#111111', '#B10DC9', '#111111']

    setInterval(function(): void {
      if (counter > 9) {
      counter = 0;
      link1.style.backgroundColor = colors[counter];
      } else {
      counter += 1;
      link1.style.backgroundColor = colors[counter];
      }
    }, 1000)
  }

  upAndDown5(): any {
    var link1 = document.getElementById('link5');
    var counter = 0;
    var colors = ['#38CCCD', '#111111', '#2FCC40', '#111111', '#FF4036', '#111111', '#FF851B', '#111111', '#B10DC9', '#111111']

    setInterval(function(): void {
      if (counter > 9) {
      counter = 0;
      link1.style.backgroundColor = colors[counter];
      } else {
      counter += 1;
      link1.style.backgroundColor = colors[counter];
      }
    }, 1000)
  }

  constructor() { }

  ngOnInit() {
    setTimeout(this.upAndDown1, 0);
    setTimeout(this.upAndDown2, 500);
    setTimeout(this.upAndDown3, 1000);
    setTimeout(this.upAndDown4, 1500);
    setTimeout(this.upAndDown5, 2000);
  }

}
