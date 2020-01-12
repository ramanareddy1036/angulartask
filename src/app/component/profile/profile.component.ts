import { Component, OnInit } from '@angular/core';
import {ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  repos: any[];
  username:string;
  profiles: any[];
  users: any[];

  constructor(private profileService: ProfileService) { 
  }

  findProfile(){
    if(this.username) {
    this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe(profile => {
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		this.repos = repos;
    })  
  }	 else {
    this.profile = null;
  }
  }

 

  ngOnInit() {
  }

}
