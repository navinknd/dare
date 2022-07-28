import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  name: string = ""
  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  sendName(name: any) {
    this.name = name;
    localStorage.setItem('name', this.name);
    this.router.navigate(['home'])
  }

}
