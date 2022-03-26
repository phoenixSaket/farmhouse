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

  public currentIndex: number = 0;
  private width: number = screen.width;
  public goNext: boolean = true;
  private movedRight: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.images = [];
    for (let i = 1; i <= 34; i++) {
      this.images.push("/assets/Images/bg-" + i + ".png");
    }

    this.currentIndex = 0;
    
    if(this.autoplay) {
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
        this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
        if (this.currentIndex % Math.round(this.width / 160) == 0) {
          document.getElementsByClassName("other-images")[0].scrollBy(1024, 0);
          this.movedRight += 1;
        }
        if (this.currentIndex == 0) {
          document.getElementsByClassName("other-images")[0].scrollBy(-(10 * 1024), 0);
          this.movedRight = 0;
        }
      }
      this.changeImage();
    }, this.interval);
  }

}
