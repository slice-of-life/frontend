import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/data/login.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loggedIn  = this.loginService.isAuthValid();
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

}
