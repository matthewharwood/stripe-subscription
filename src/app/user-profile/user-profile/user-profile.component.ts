import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public auth: AuthService;

  constructor(private authService: AuthService) {
    this.auth = this.authService;
  }

  ngOnInit() {
  }

}
