import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { LeagubStatsPage } from '../leagub-stats/leagub-stats';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  openLeagueA() {
    this.navCtrl.push(AboutPage);
  }
  openLeagueB() {
    this.navCtrl.push(LeagubStatsPage);
  }
}
