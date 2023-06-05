import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'profilelist', pathMatch: 'full' },
  { path: 'profilelist', component: ProfileListComponent },
  { path: 'viewprofile', component: ViewProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
