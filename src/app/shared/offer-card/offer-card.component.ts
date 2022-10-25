import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input() type: string = "";
  @Input() content: string[] = [];
  @Input() price: string = "";

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   document.getElementById(this.type.toLowerCase())?.setAttribute("style", "--color: var(--" + this.type.toLowerCase() + ");");
    // }, 10)
  }

}
