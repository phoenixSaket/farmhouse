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
  public landing: any = { top: "", bottom: "", image: "" };
  public carousel: any = { images: [], autoplay: true, shouldStopAtHover: true, interval: 3000 };
  public offers: any[] = [];
  public feedbacks: any[] = [];
  public ownerDetails: any = {};
  public info: any = [];
  public activeImage: any[] = [];
  public currentIndex: number = 0;
  private width: number = 0;

  ngOnInit() {
    let jsonData = JSON.parse(JSON.stringify(data));
    this.links = jsonData.default.links;
    this.landing = jsonData.default.landing;
    this.carousel = jsonData.default.carousel;
    this.offers = jsonData.default.offers;
    this.feedbacks = jsonData.default.feedbacks;
    this.ownerDetails = jsonData.default.ownerDetails;
    this.info = jsonData.default.info;

    for (let i = 0; i < 4; i++) {
      if (i == 0) {
        this.activeImage.push(true);
      } else {
        this.activeImage.push(false);
      }
    }

    this.animate();
    this.width = window.screen.availWidth;
    if(this.width > 1024) {
      this.width = 1024;
    }
  }

  animate() {
    setTimeout(() => {
      this.goRight();
      this.currentIndex = this.currentIndex + 1;
      if (this.currentIndex == 4) this.currentIndex = 0;
      this.setActiveImage(this.currentIndex);
      this.animate();
    }, 3000);
  }

  goLeft() {
    let el = document.getElementById("nav");
    let x = el?.scrollLeft || 0;
    switch (x) {
      case (x == 0 ? x : null):
        el?.scrollTo(this.width * 3, 0);
        this.setActiveImage(3);
        break;
      case (x > 0 && x <= this.width ? x : null):
        el?.scrollTo(0, 0);
        this.setActiveImage(0);
        break;
      case (x > this.width && x <= this.width * 2 ? x : null):
        el?.scrollTo(this.width, 0);
        this.setActiveImage(1);
        break;
      case (x >= this.width * 2 && x <= this.width * 3 ? x : null):
        el?.scrollTo(this.width * 2, 0);
        this.setActiveImage(2);
        break;
      default:
        this.setActiveImage(0);
        break;
    }
  }

  goRight() {
    let el = document.getElementById("nav");
    let x = el?.scrollLeft || 0;
    switch (x) {
      case (x == 0 ? x : null):
        el?.scrollTo(this.width, 0);
        this.setActiveImage(1);
        break;
      case (x <= this.width && x >= 0 ? x : null):
        el?.scrollTo(this.width * 2, 0);
        this.setActiveImage(2);
        break;
      case (x <= this.width * 2 && x >= this.width ? x : null):
        el?.scrollTo(this.width * 3, 0);
        this.setActiveImage(3);
        break;
      case (x >= this.width * 2 ? x : null):
        el?.scrollTo(0, 0);
        this.setActiveImage(0);
        break;
      default:
        this.setActiveImage(0);
        break;
    }
  }

  setActiveImage(index: number) {
    for (let i = 0; i < this.activeImage.length; i++) {
      this.activeImage[i] = false;
    }
    this.activeImage[index] = true;
  }
}
