import { Component, Input,  Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import { AppService } from '../../app.service';
import * as kf from './keyframes';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-daily-recommendation',
  templateUrl: './daily-recommendation.component.html',
  styleUrls: ['./daily-recommendation.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class DailyRecommendationComponent implements OnInit {
  public index = 0;
  @Input()
  parentSubject!: Subject<any>;
  @Output() newItemEvent = new EventEmitter<string>();
  animationState: any;
  groomProfiles:any = [];
  cardProfiles:any = [];
  constructor(public appservice:AppService,public toastrService: ToastrService) { 
    
  }

  ngOnInit() {
    this.index = 0;
    this.cardProfiles = [];
    this.groomProfiles = this.appservice.getProfilelist();
    let pending = this.groomProfiles.filter((val:any)=> val.Action == 0);
    this.cardProfiles = pending;
    this.parentSubject.subscribe(event => {
      this.startAnimation(event);
    });
  }

  startAnimation(state:any) {
    if (!this.animationState) {
      this.animationState = state;
      let action = 0;
      if(state == "swipeleft") {
        action = 10;
      } else if(state == "swiperight") {
        action = 20;
      } else if(state == "swipeleft") {
        action = 10;
      }
      let getProfileList = this.appservice.getProfilelist();
      if(getProfileList.length > 0) {
        for(let p=0; p<getProfileList.length; p++) {
          if(getProfileList[p].Id == this.cardProfiles[this.index].Id) {
            getProfileList[p].Action = action;
          }
        }
      }
      let header = "";
      let message = "";
      if(action == 10) {
        header = 'Success';
        message = 'Interested';
      } else if(action == 20) {
        header = 'Success';
        message = 'Rejected';
      } else if(action == 30) {
        header = 'Success';
        message = 'Shortlisted';
      }
      this.toastrService.success(header, message);
      
      setTimeout(() => {
        this.addNewItem(getProfileList);
        if(this.index > -1) {
          this.cardProfiles.splice(this.index, 1);
        } else {
          this.cardProfiles =[];
        }
      }, 500);
      
    }
  }

  resetAnimationState(state:any) {
    this.animationState = '';
    if(this.index < this.cardProfiles.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

}
