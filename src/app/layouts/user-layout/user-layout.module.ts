import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserLayoutRoutes } from './user-layout.routing';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule, } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DashboardComponent } from 'src/app/users/dashboard/dashboard.component';
import { DynamicScriptLoaderService } from 'src/app/common/services/dynamic-script-load-service';
import { TabsModule } from 'ngx-foundation';
import { TournamentsComponent } from 'src/app/users/tournaments/tournaments.component';
import { EventsComponent } from 'src/app/users/events/events.component';
import { SeasonsComponent } from 'src/app/users/seasons/seasons.component';
import { TeamsComponent } from 'src/app/users/teams/teams.component';
import { ProfileComponent } from 'src/app/users/profile/profile.component';
import { SlideToggleModule } from 'ngx-slide-toggle';
import { EventCreateComponent } from 'src/app/users/event-create/event-create.component';

// import { IconImportModule } from 'mat-icon-import';
//import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // IconImportModule,
    // LbdModule,
    // InfiniteScrollModule,
    //NgxDaterangepickerMd.forRoot(),
     TabsModule.forRoot(),
    SlickCarouselModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDatepickerModule,
    SlideToggleModule,
    // MatTabsModule
  ],
  declarations: [
    DashboardComponent,
    TournamentsComponent,
    EventsComponent,
    SeasonsComponent,
    TeamsComponent,
    ProfileComponent,
    EventCreateComponent
    // SeasonCreateComponent,
    //  SeasonsComponent,
    //   TeamsComponent,
    // TeamCreateComponent,
    
    // ManageStaffComponent,
    // PoolsComponent
  ],
  providers: [
    DynamicScriptLoaderService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class UserLayoutModule {}
