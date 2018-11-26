import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LeagueaPage } from '../leaguea/leaguea';
import { LeaguebPage } from '../leagueb/leagueb';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  openLeagueA() {
    this.navCtrl.push(LeagueaPage);
  }
  openLeagueB() {
    this.navCtrl.push(LeaguebPage);
  }
}
