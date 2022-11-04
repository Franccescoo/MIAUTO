import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }

  getUser(id): Observable<any> {
    return this.http.get(this.apiURL + '/users/' + id).pipe(
      retry(3)
    );
  }
}

