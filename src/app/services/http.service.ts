import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly url = 'http://34.122.205.216:8080/graphql';
  headers:HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
   })
  
  constructor(public http: HttpClient) { }

  postDatos() {
    const user = 1;
    const datos = { query:
      `query {
      listMeetingsAttendant(attendant:` +
      user +
      `){
        link
        name
        description
        attendants
        date_start
        date_end
        host
      }
      listMeetingsHosted(host:` +
      user +
      `){
        link
        name
        description
        attendants
        date_start
        date_end
        host
      }
    }    
  `,};
  
    return this.http.post(this.url, JSON.stringify(datos), {headers:this.headers}).toPromise();
  }

  login(email, password) {
    const datos = `mutation { login(loginUser:{ email: \"${email}" password:\"${password}\"} ) {id, name, email, token}}`;
     return this.http.post(this.url, {query:datos}, {headers:this.headers}).toPromise();
     
  }
}
