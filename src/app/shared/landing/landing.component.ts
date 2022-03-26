import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input() text: any;
  
  constructor() { }

  ngOnInit(): void {
    document.getElementsByClassName("landing-container")[0].setAttribute("style", "--image: url(" + this.text.image + ')');
  }

}
