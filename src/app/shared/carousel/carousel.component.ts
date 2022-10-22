import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() autoplay: boolean = true;
  @Input() shouldStopAtHover: boolean = true;
  @Input() interval: number = 3000;
  @Input() fadeDuration: number = 150;

  public currentIndex: number = 0;
  private width: number = screen.width;
  public goNext: boolean = true;
  private movedRight: number = 0;
  public changeOfImage: boolean = false;
  private boxWidth: number = 160;
  public currentImg: string = "";

  constructor() { }

  ngOnInit(): void {

    document.getElementsByClassName("active-image")[0]?.setAttribute("style", "--fade-duration:" + this.fadeDuration + 'ms;');

    this.currentIndex = 0;

    if (this.autoplay) {
      this.changeImage();
    }

    this.width = this.width > 1024 ? 1024 : this.width;

    if (this.width < 768) {
      this.width -= 20;
      this.boxWidth = 95;
    }
  }

  openImage(src: string, i: number) {
    this.currentImg= src;
    this.currentIndex = i;
  }

  closeImage() {
    this.currentImg = "";
  }

  setCurrentImage(index: number) {
    this.currentIndex = index;
  }

  startNext() {
    this.goNext = true;
  }

  stopNext() {
    if (this.shouldStopAtHover) {
      this.goNext = false;
    }
  }

  changeImage() {
    setTimeout(() => {
      if (this.goNext) {

        setTimeout(() => {
          this.changeOfImage = true;
          this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
        }, 1000);
        this.changeOfImage = false;

        if ((this.currentIndex + 1) % Math.round(this.width / this.boxWidth) == 0) {
          document.getElementsByClassName("other-images")[0].scrollBy(this.boxWidth == 105 ? this.width - 20 : this.width, 0);
          this.movedRight += 1;
        }

        if (this.currentIndex == 0) {
          document.getElementsByClassName("other-images")[0].scrollBy(-((this.movedRight + 10) * this.width), 0);
          this.movedRight = 0;
        }
      }
      this.changeImage();
    }, this.interval);
  }

}
