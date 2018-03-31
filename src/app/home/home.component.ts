import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerHeight: number = document.getElementsByTagName('header')[0].offsetHeight;
  innerHeight:number = window.innerHeight - this.headerHeight - 8 - 3;

  constructor() { }
  ngOnInit() {
  }
  
}
