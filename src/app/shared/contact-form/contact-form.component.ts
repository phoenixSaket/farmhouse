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
  public name: string = "";
  public email: string = "";
  public message: string = "";
  public phone: string = "";
  public errors: any = { name: false, email: false, phone: false, message: false };

  constructor() { }

  ngOnInit(): void {
  }

  textInput(type: string, event: any) {
    switch (type) {
      case "name":
        if (event?.target?.value !== '') {
          this.name = event.target.value;
        } else {
          this.errors.name = true;
        }
        break;
      case "email":
        if (event?.target?.value !== '' && ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value)))) {
          this.email = event.target.value;
        } else {
          this.errors.email = true;
        }
        break;
      case "phone":
        if (event?.target?.value !== '' && ((/^[0-9]{10}$/).test(event.target.value))) {
          this.phone = event.target.value;
        } else {
          this.errors.phone = true;
        }
        break;
      case "message":
        if (event?.target?.value !== '') {
          this.message = event.target.value;
        } else {
          this.errors.message = true;
        }
        break;
      default: break;
    }
    console.log(event.target.value)
  }

  sendMail() {
    if (this.name != "" && this.email != "" && this.phone != "" && this.message != "") {
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
    } else {
      if (this.name == "") {
        this.errors.name = true;
      }
      if (this.email == "") {
        this.errors.email = true;
      }
      if (this.phone == "") {
        this.errors.phone = true;
      }
      if (this.message == "") {
        this.errors.message = true;
      }
    }
  }

}
