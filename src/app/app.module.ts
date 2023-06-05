import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ToastrModule } from 'ngx-toastr';
import { DailyRecommendationComponent } from './profile-list/daily-recommendation/daily-recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    ProfileListComponent,
    DailyRecommendationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatTabsModule,
    NgxUsefulSwiperModule,
    ToastrModule.forRoot()
  ],
  exports: [
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
