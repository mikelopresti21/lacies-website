import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  private expressUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  sendEmail(contactForm: any): Observable<any> {
    return this.http.post(this.expressUrl, contactForm);
  }
}
