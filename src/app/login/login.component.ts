import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
// import {  } from "";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder, private dataService: ApiService, private router: Router
  ) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  // submission of data
  postdata(angForm: any) {
    this.dataService.userlogin(
      this.angForm.value.email,
      this.angForm.value.password,
    )
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        if (data.message == 'success') {

          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
          this.router.navigate(['dashboard']);
        }
        // console.error('Email or Password is incorrect');
      });
  }



  ngOnInit(): void {

  }

}
