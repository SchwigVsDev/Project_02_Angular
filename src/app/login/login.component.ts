import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private user: User, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('account');
    }
  }

  public Login() {
    this.user.username = this.loginGroup.value['username'];
    this.user.password = this.loginGroup.value['password'];
    this.user.id = 100;
    this.user.accessKey = "User";

    console.log('Login user: ', this.user);

    this.authService.login(this.user);
    this.router.navigateByUrl('account');
  }

}
