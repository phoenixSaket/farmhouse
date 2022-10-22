import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  isSendingMail: boolean = false;
  isMailSent: boolean = false;
  isSendingTried: boolean = false;
  public name: any;
  public email: any;
  public message: any;
  public phone: any;
  public error: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  textInput(type: string, event: any) {
    switch (type) {
      case "name": this.name = event.target.value; break;
      case "email": this.email = event.target.value; break;
      case "phone": this.phone = event.target.value; break;
      case "message": this.message = event.target.value; break;
      default: break;
    }
    console.log(event.target.value)
  }

  sendMail() {
    this.isSendingMail = true;
    this.isMailSent = false;

    let templateParams = {
      name: this.name,
      from_email: this.email,
      to_name: this.email,
      message: this.message,
      phone: this.phone
    }

    emailjs.send(
      'service_e3hrxr5',
      'template_cobyj79',
      templateParams,
      'BpZ2Og7ymuit3VWlW'
    ).then((response) => {
      console.log("response", response);
      if (response.status == 200) {
        this.isSendingMail = false;
        this.isMailSent = true;
        this.isSendingTried = true;
      }
    }, (error) => {
      console.log("Email Error in service", error);
      this.isSendingTried = true;
      this.isSendingMail = false;
      this.isMailSent = false;
    })
  }

}
