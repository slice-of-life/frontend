import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/data/profile.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getUserInfo().subscribe({
      next: (response : User) => {
        this.user = response;
      },
    });
  }
}
