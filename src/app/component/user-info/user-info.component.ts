import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
userName: string;
repos: any[];
  constructor(private profileService: ProfileService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userName = params.get('username');
      this.profileService.updateProfile(this.userName);
      this.profileService.getProfileRepos().subscribe(repos => {
        this.repos = repos;
      })
    })
  }

}
