import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailsService } from '../services/emails.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent {

  constructor(private emailsService: EmailsService) {}

  submit(contactForm: any) {
    console.log('from contact form');
    const formData = {
      name: contactForm.controls.name.value,
      email: contactForm.controls.email.value,
      message: contactForm.controls.message.value,
    }

    this.emailsService.sendEmail(formData);
  }
}
