import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() links: any[] = [];
  public showLinks: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink(event.url.toString());
      }
    })

    let array: any[] = [];
    this.links.forEach(link => {
      let url = link;
      let data = { url: url, isActive: false };
      array.push(data);
    });

    this.links = array;
  }

  setActiveLink(url: string) {
    if (url.includes("gallery")) { this.setActive("gallery") }
    else if (url.includes("offers")) { this.setActive("offers") }
    else if (url.includes("feedbacks")) { this.setActive("feedbacks") }
    else if (url.includes("contact_us")) { this.setActive("contactUs") }
    else { this.setActive("none") }
  }

  setActive(active: string) {
    let arrayString = ["gallery", "offers", "feedbacks", "contactUs"];

    if (active == "none") {
      this.links.forEach(link => {
        link.isActive = false;
      })
      return;
    }

    arrayString.forEach((link, index) => {
      if (link == active) {
        this.links[index].isActive = true;
      } else {
        this.links[index].isActive = false;
      }
    })
  }

  hideAfterClick() {
    setTimeout(() => {

      this.showLinks = false;
    }, 200)
  }


}
