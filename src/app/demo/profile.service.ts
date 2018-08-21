import { Injectable } from '@angular/core';
import { RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   sever = 'http://localhost:8000/';
   headers: Headers = new Headers;
   options: any;
  constructor(private http: HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
  }
  addProfile(info) {
    // const data = JSON.stringify(info);
    console.log(info);
    return this.http.post(this.sever + 'addprofile', info);
  }
}
