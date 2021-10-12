import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectBackendService {

  constructor(private http: HttpClient) { }

  onSendService(model: any, headers: HttpHeaders): Subscription {
    return this.http.post<any>('https://localhost:80/', 
           JSON.stringify(model), {
             headers: headers
            }).subscribe();
  } 
}
