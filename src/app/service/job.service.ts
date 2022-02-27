import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(public http: HttpClient) {}
  getJobs() {
    let URL = 'https://mocki.io/v1/b9cd1b94-a53f-4fc6-9615-b91a5d8d85eb';
    return this.http.get(URL);
  }
}
