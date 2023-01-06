import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/data/login.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loggedIn  = this.authService.isAuthValid();
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut();
  }
}
