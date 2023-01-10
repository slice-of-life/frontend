import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/data/login.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loggedIn  = this.authService.isAuthValid();

  navItems = [
    {
      path : '/',
      iconName : 'home',
      buttonLabel : 'Home'
    },
    {
      path : '/',
      iconName : 'feed',
      buttonLabel : 'Feed'
    },
    {
      path : '/profile',
      iconName : 'person',
      buttonLabel : 'Profile'
    },
    {
      path : '/tasks',
      iconName : 'task',
      buttonLabel : 'Tasks'
    },
    {
      path : '/new-post',
      iconName : 'add_circle',
      fill : true,
      buttonLabel : 'New Post'
    },
  ]
  constructor(private authService : AuthService, private router : Router) { }



  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

  navigateToPage(relativePath : string) {
    this.router.navigateByUrl(relativePath);
  }
}
