import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  randomLetter(): string {
    var alphabet = '0123456789!@#$%^&*'.split('');
    return alphabet[Math.floor(Math.random()*alphabet.length)];
  }

  changeLetter(randomLetter, letter): any {
    var ltr = document.getElementById(letter);
    var count = 0;

    if (letter.includes('e')) {
      letter = 'e'
    }

    if (letter.includes('l')) {
      letter = 'l'
    }

    if (letter.includes('T')) {
      letter = ' T'
    }

    setInterval(function(): void {
      if (count < 50) {
        ltr.innerText = randomLetter();
      } else {
        ltr.innerText = letter
      }
      count += 1;
    }, 50)
  }

  styledName(changeLetter, randomLetter): void {

    setTimeout(function(): void {
      changeLetter(randomLetter, "H")
    }, 0)
    setTimeout(function(): void {
      changeLetter(randomLetter, "e1")
    }, 200)
    setTimeout(function(): void {
      changeLetter(randomLetter, "l1")
    }, 400)
    setTimeout(function(): void {
      changeLetter(randomLetter, "l2")
    }, 600)
    setTimeout(function(): void {
      changeLetter(randomLetter, "o")
    }, 800)
    setTimeout(function(): void {
      changeLetter(randomLetter, "T")
    }, 1000)
    setTimeout(function(): void {
      changeLetter(randomLetter, "h")
    }, 1200)
    setTimeout(function(): void {
      changeLetter(randomLetter, "e2")
    }, 1400)
    setTimeout(function(): void {
      changeLetter(randomLetter, "r")
    }, 1600)
    setTimeout(function(): void {
      changeLetter(randomLetter, "e3")
    }, 1800)
    setTimeout(function(): void {
      changeLetter(randomLetter, "!")
    }, 2000)


  }

  constructor() { }

  ngOnInit() {
    this.styledName(this.changeLetter, this.randomLetter);
  }

}
