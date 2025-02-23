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
        next: response => console.log('success', response),
        error: error => console.error(error)
      });
  }
}
