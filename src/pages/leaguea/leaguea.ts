import { AngularFireDatabase } from '@angular/fire/database';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { TeamPage } from '../team/team';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the LeagueaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leaguea',
  templateUrl: 'leaguea.html'
})
export class LeagueaPage {
  items;
  dataSource;
  Columns: string[] = ['round', 'team1', 'result', 'team2'];
  displayedColumns: string[] = ['pos', 'name', 'p', 'w', 'gd', 'pts'];
  playerData;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    afDB: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public dataService: DataProvider
  ) {
    this.presentLoading();

    this.dataService
      .getTeamDataWithId(
        `http://pesfm.org/wp-json/sportspress/v2/sp_table/2643`
      )
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
    this.dataService
      .getData(`http://pesfm.org/wp-json/sportspress/v2/sp_list/3214`)
      .subscribe(data => {
        this.playerData = data;
      });

    this.items = afDB.list('league_A').valueChanges();
  }
  showPlayers(id) {
    var filteredPlayer = this.dataService.filterData(this.playerData, id);
    if (filteredPlayer.length > 0) {
      this.navCtrl.push(TeamPage, { filteredPlayer });
    } else {
      console.log(`No players`);
    }
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Loading'
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
    }, 3000);
  }
}
export interface Table {
  name: string;
  pos: number;
  w: number;
  gd: number;
  pts: number;
  p: number;
}
