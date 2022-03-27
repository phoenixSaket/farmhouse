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
    if (this.setDynamicColors) {
      setTimeout(() => {
        document.getElementById("color-" + this.color)?.setAttribute("style", "--color : " + this.color + ";");
      }, 10)
    }

  }

}
