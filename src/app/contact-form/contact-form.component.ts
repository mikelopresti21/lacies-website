import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent {

  constructor(private emailService: EmailService) {}

  submit(contactForm: any) {
    
    this.emailService.sendEmail(contactForm).subscribe(
      (response) => {
        console.log('success');
      },
      (error) => {
        console.log('failed');
      }
    );
  }
}
