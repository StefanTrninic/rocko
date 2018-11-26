import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {
  Player;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Player = this.navParams.get('value');
    console.log(this.Player);
  }
}