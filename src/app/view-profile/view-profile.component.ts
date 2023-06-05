import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  currentProfile:any = {};
  constructor(private router: Router, private appservice: AppService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.currentProfile = this.appservice.selectedProfile;
  }

  //Interest-10, Reject-20, Shortlist-30
  profileAction(data:any, action:any) {
    let getProfileList = this.appservice.getProfilelist();
    if(getProfileList.length > 0) {
      for(let p=0; p<getProfileList.length; p++) {
        if(getProfileList[p].Id == data.Id) {
          getProfileList[p].Action = action;
        }
      }
    }
    let header = "";
    let message = "";
    if(action == 10) {
      header = 'Success';
      message = 'Profile Interested';
    } else if(action == 20) {
      header = 'Success';
      message = 'Profile Rejected';
    } else if(action == 30) {
      header = 'Success';
      message = 'Profile has been Shortlisted';
    }
    this.toastrService.success(header, message);
    this.appservice.updateProfileList(getProfileList);
    this.router.navigate(['/profilelist']);
  }

  goToMainMenu() {
    this.router.navigate(['/profilelist']);
  }
}
