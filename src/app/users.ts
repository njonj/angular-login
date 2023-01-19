import { VirtualTimeScheduler } from "rxjs";

export class Users{

  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public mobile: string;
  public password: string;

  constructor(id: number, name: string, username: string, email: string, mobile: string, password: string ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.mobile = mobile;
    this.password = password;

  }
}
