import { DataProvider } from './../../providers/data/data';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TeamPage } from '../team/team';
import { StoryPage } from '../story/story';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataSource: MatTableDataSource<Table>;

  playerDataB;
  rowsB; //: MatTableDataSource<Table>;
  ColumnsB: string[] = ['pos', 'name', 'p', 'w', 'gd', 'pts'];
  displayedColumns: string[] = ['pos', 'name', 'p', 'w', 'gd', 'pts'];
  playerData;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) sortb: MatSort;
  constructor(
    public navCtrl: NavController,
    public dataService: DataProvider,
    public loadingCtrl: LoadingController
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
      .getTeamDataWithId(
        `http://pesfm.org/wp-json/sportspress/v2/sp_table/2646`
      )
      .subscribe(data1 => {
        this.rowsB = new MatTableDataSource(data1);
        this.rowsB.sort = this.sortb;
      });
    this.dataService
      .getData(`http://pesfm.org/wp-json/sportspress/v2/sp_list/3214`)
      .subscribe(data => {
        this.playerData = data;
      });
    this.dataService
      .getData(`http://pesfm.org/wp-json/sportspress/v2/sp_list/3215`)
      .subscribe(data => {
        this.playerDataB = data;
      });
  }

  showPlayers(id) {
    var filteredPlayer = this.dataService.filterData(this.playerData, id);
    if (filteredPlayer.length > 0) {
      this.navCtrl.push(TeamPage, { filteredPlayer });
    } else {
      console.log(`No players`);
    }
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

  openStory() {
    this.navCtrl.push(StoryPage);
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
