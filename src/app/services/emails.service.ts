import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private apiUrl = "http://localhost:3000/contact"

  constructor(private http: HttpClient) { }

  sendEmail(){
    console.log('from email service');
    this.http.post(this.apiUrl, 'test');
  }
}
