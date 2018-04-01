import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  hide: boolean = true;
  error: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.email === 'test@nv.com' && this.password === 'tested') {
      this.userService.isLoggedIn = true;
      this.router.navigate(['']);
    } else {
      this.error = true;
    }
  }
}
