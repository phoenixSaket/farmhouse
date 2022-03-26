import { Component } from '@angular/core';
import * as data from "../context.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viva Farms';
  public links: string[] = [];
  public landing: any = {top: "", bottom: "", image: ""};

  ngOnInit() {
    let jsonData = JSON.parse(JSON.stringify(data));
    this.links = jsonData.default.links;
    this.landing = jsonData.default.landing;
  }
}
