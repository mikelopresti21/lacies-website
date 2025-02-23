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

  submit() {
    console.log('from contact form');
    this.emailsService.sendEmail();
  }
}
