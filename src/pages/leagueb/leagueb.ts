import { MatSort, MatTableDataSource } from '@angular/material';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { TeamPage } from '../team/team';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'page-leagueb',
  templateUrl: 'leagueb.html'
})
export class LeaguebPage {
  items;
  playerDataB;
  dataSource;
  Columns: string[] = ['round', 'team1', 'result', 'team2'];

  ColumnsB: string[] = ['pos', 'name', 'p', 'w', 'gd', 'pts'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    afDB: AngularFireDatabase,
    public dataService: DataProvider,
    public loadingCtrl: LoadingController
  ) {
    this.presentLoading();

    this.items = afDB.list('league_B').valueChanges();

    this.dataService
      .getTeamDataWithId(
        `http://pesfm.org/wp-json/sportspress/v2/sp_table/2646`
      )
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
    this.dataService
      .getData(`http://pesfm.org/wp-json/sportspress/v2/sp_list/3215`)
      .subscribe(data => {
        this.playerDataB = data;
      });
    this.items = afDB.list('league_B').valueChanges();
  }
  showPlayersb(id) {
    var filteredPlayer = this.dataService.filterData(this.playerDataB, id);
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
