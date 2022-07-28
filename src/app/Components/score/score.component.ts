import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  name: string | null = '';
  score: string | null | number = '';

  message: string = ''

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.score = Number(localStorage.getItem('score'))

    switch (this.score) {
      case 1:
        this.message='very worst'
        break;
      case 2:
        this.message='worst'
        break;
      case 3:
        this.message='better'
        break;
      case 4:
        this.message='good'
        break;
      case 5:
        this.message='excellent'
        break;
      default:
        this.message='go and die'
        break;
    }
  }

}
