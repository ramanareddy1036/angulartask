import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { UsersComponent } from './component/users/users.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { HomeComponent } from './component/home/home.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'search', component: ProfileComponent},
  {path: 'info/user/:username', component: UserInfoComponent},
  { path: '**', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    UserInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }