import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PostFeed } from '../interfaces/PostFeed';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = 'https://randomuser.me/api/';



  constructor(private httpClient: HttpClient) { }

  getUserPostFeed(pageNo, records):any {
    return this.httpClient.get(this.endpoint + `?page=${ pageNo }&results=${ records }&seed=feed`);
  }
}
