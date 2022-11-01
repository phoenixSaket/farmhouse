import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() name: string = "";
  @Input() address: string = "";
  @Input() image: string = "";
  @Input() color: string = "";
  @Input() content: string = "";
  @Input() setDynamicColors: boolean = false;
  @Input() ownerDetails: any = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ownerDetails)
    if (this.setDynamicColors) {
      setTimeout(() => {
        document.getElementById("color-" + this.color)?.setAttribute("style", "--color : " + this.color + ";");
      }, 10)
    }

  }

  openSocial(link: string) {
    window.open(link, "_blank");
  }
}
