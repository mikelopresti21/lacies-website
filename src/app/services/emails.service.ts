import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private apiUrl = "https://lacies-website.vercel.app/contact"

  constructor(private http: HttpClient) { }

  sendEmail(formData: any): Observable<any>{
    return this.http.post(this.apiUrl, formData)
  }
}
