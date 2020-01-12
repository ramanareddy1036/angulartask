import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = 'Iv1.efe4fffe258ee088';
  private clientsecret = '6ad83b4f8c27b9804989393cb6c21e0c10fb06ec';

  constructor(private http:Http) { 
  	console.log("service is now ready!");
  }
// getting profile info based on username
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()));
  }
// getting repositories of the user 
  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(map(res => res.json()));
  }

  // getting all github users 
  apiUrl = 'https://api.github.com/users';
  getAllProfiles() {
    return this.http.get(`${this.apiUrl}?per_page=50`).pipe(map(res => res.json()));
  }

  authentication() {
    return this.http.get("https://api.github.com/users/whatever?client_id=" + this.clientid + "client_secret=" +this.clientsecret).pipe(map(res => res.json()));
  }

  updateProfile(username:string){
  	this.username = username;
  }
}
