import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private apiUrl = "https://lacies-website.vercel.app/contact"

  constructor(private http: HttpClient) { }

  sendEmail(formData: any){
    console.log('from email service');
    return this.http.post(this.apiUrl, formData)
      .subscribe({
        next: (response) => {
          window.alert('Thanks for reaching out to me! I will follow up with you as soon as I can!');
        },
        error: (error) => {
          window.alert("Oh no something went wrong! Please make sure you are entering a valid email address");
          console.error(error);
        }
      });
  }
}
