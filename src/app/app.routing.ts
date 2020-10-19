import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes =[
    { path: 'style-guide',             component: StyleGuideComponent },
    { path: 'homepage',             component: HomepageComponent },
    { path: 'profile/:person',     component: ProfileComponent },
    { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
