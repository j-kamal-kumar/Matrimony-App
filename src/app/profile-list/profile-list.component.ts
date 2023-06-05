import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import Swiper, { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ProfileListComponent implements OnInit {
  parentSubject:Subject<string> = new Subject();
  groomProfiles: any = [];
  pendingProfiles:any = [];
  interestedProfiles:any = [];
  rejectedProfiles:any = [];
  shortListedProfiles:any = [];
  dailyRecommendations:any = [];
  pendingCounts = 0;
  interestedCounts = 0;
  rejectedCounts = 0;
  shortListedCounts = 0;
  currentType = 0;
  config: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 5,
    loop: true
  };
  constructor(
    public appservice:AppService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.groomProfiles = [];
    this.pendingProfiles = [];
    this.interestedProfiles = [];
    this.rejectedProfiles = [];
    this.shortListedProfiles = [];
    this.groomProfiles = this.appservice.getProfilelist();
    let pending = this.groomProfiles.filter((val:any)=> val.Action == 0);
    let interested = this.groomProfiles.filter((val:any)=> val.Action == 10);
    let rejected = this.groomProfiles.filter((val:any)=> val.Action == 20);
    let shortlist = this.groomProfiles.filter((val:any)=> val.Action == 30);
    this.pendingCounts = pending.length;
    this.interestedCounts = interested.length;
    this.rejectedCounts = rejected.length;
    this.shortListedCounts = shortlist.length;
    this.pendingProfiles = pending;
    console.log('this.pendingProfiles',this.pendingProfiles);
    this.interestedProfiles = interested;
    this.rejectedProfiles = rejected;
    this.shortListedProfiles = shortlist;
  }

  viewProfile(val: any) {
    this.appservice.selectProfile(val);
    this.router.navigate(['/viewprofile']);
  }

  
  cardAnimation(value:any) {
    this.parentSubject.next(value);
  }

  addItem(event:any) {
    this.appservice.updateProfileList(event);
    console.log('event',event);
    this.ngOnInit();
  }

}