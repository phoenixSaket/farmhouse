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

  constructor() { }

  ngOnInit(): void {

    document.getElementsByClassName("active-image")[0]?.setAttribute("style", "--fade-duration:" + this.fadeDuration + 'ms;');

    this.currentIndex = 0;

    if (this.autoplay) {
      this.changeImage();
    }

    this.width = this.width > 1024 ? 1024 : this.width;
  }

  setCurrentImage(index: number) {
    this.currentIndex = index;
    this.movedRight = Math.round(index / this.images.length);
  }

  public stopNext() {
    if (this.shouldStopAtHover) {
      this.goNext = false;
    }
  }

  public startNext() {
    this.goNext = true;
  }

  changeImage() {
    setTimeout(() => {
      if (this.goNext) {

        setTimeout(() => {
          this.changeOfImage = true;
          this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
        }, 1000);
        this.changeOfImage = false;

        if (this.currentIndex % Math.round(this.width / 160) == 0) {
          document.getElementsByClassName("other-images")[0].scrollBy(1024, 0);
          this.movedRight += 1;
        }

        if (this.currentIndex == 0) {
          document.getElementsByClassName("other-images")[0].scrollBy(-((this.movedRight + 10) * 1024), 0);
          this.movedRight = 0;
        }
      }
      this.changeImage();
    }, this.interval);
  }

}
