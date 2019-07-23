import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-statement',
  templateUrl: './personal-statement.component.html',
  styleUrls: ['./personal-statement.component.css']
})
export class PersonalStatementComponent implements OnInit {
  constructor() { }

  fadeStatement(): void {
    var stmnt = document.getElementById('personalStatement');
    stmnt.style.opacity = '1';
  }

  ngOnInit() {
    setTimeout(this.fadeStatement, 1000);
  }
}
