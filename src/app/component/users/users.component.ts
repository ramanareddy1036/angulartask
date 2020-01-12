import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private profileService: ProfileService) { }
  getUsers() {
    this.profileService.getAllProfiles().subscribe(users => {
      this.users = users;
    })
  }
  ngOnInit() {
    this.getUsers();
  }

}
