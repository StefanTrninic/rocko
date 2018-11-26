import { StoryPage } from './../pages/story/story';
import { LeagubStatsPage } from './../pages/leagub-stats/leagub-stats';
import { StatsPage } from './../pages/stats/stats';
import { LeaguebPage } from './../pages/leagueb/leagueb';
import { LeagueaPage } from './../pages/leaguea/leaguea';
import { TeamPage } from './../pages/team/team';
import { PlayerPage } from './../pages/player/player';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicErrorHandler, IonicApp } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MatTableModule } from '@angular/material/table';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { TeamNamePipe } from '../pipes/name/name';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

export const firebaseConfig = {
  apiKey: 'AIzaSyCKZFXcr_6PKZqFGYR2hDj2vCiDNCf-vY4',
  authDomain: 'rocko-test-c558e.firebaseapp.com',
  databaseURL: 'https://rocko-test-c558e.firebaseio.com',
  projectId: 'rocko-test-c558e',
  storageBucket: 'rocko-test-c558e.appspot.com',
  messagingSenderId: '767384102752'
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TeamNamePipe,
    PlayerPage,
    TeamPage,
    LeagueaPage,
    LeaguebPage,
    StatsPage,
    StoryPage,
    LeagubStatsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PlayerPage,
    TeamPage,
    LeagueaPage,
    LeaguebPage,
    StatsPage,
    StoryPage,
    LeagubStatsPage
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule {}
