
import { Injectable, Output, EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  redirectUrl!: string;
  baseUrl: string = "http://localhost/HospitalApp";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) {

  }


  public userregistration(name:any, username:any, email:any, mobile:any, password:any){
    return this.httpClient.post<any>(this.baseUrl + '/register.php', {
      name, username, email, mobile, password
    })
      .pipe(map(Users => {
        return Users;
      }));


  }
  public userlogin(email:any, password:any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
    .pipe(map(Users => {
      console.log(Users)
      this.setToken(Users.email);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
  }
}
