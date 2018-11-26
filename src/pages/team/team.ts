import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class TeamPage {
  teamName;

  public columns: string[] = [
    'name',
    'goals',
    'assists',
    'yellowcards',
    'eventsplayed',
    'winratio'
  ];
  public rows: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rows = this.navParams.get('filteredPlayer');
    console.log(this.rows);
    this.teamName = this.rows[0].team;
  }
  showData(value) {
    this.navCtrl.push(PlayerPage, { value });
  }
}
