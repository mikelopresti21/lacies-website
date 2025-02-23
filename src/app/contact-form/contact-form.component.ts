import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailsService } from '../services/emails.service';
import { response } from 'express';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent {

  constructor(private emailsService: EmailsService) {}

  submit(contactForm: any) {
    
    const formData = {
      name: contactForm.controls.name.value,
      email: contactForm.controls.email.value,
      message: contactForm.controls.message.value,
    }

    this.emailsService.sendEmail(formData)
      .subscribe({
        next: response => {
          window.alert("Email was sent successfully! Thank you for reaching out, I will follow up with you as soon as I can");
        },
        error: error => {
          console.log(error);
          window.alert("Failed to send email! Please make sure you are entering a valid email address");
        }
      });
  }
}
