import { DataProvider } from './../../providers/data/data';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-leagub-stats',
  templateUrl: 'leagub-stats.html'
})
export class LeagubStatsPage {
  ColumnsA: string[] = ['name', 'team', 'goals', 'assists', 'eventsplayed'];
  dataSource: MatTableDataSource<Stats>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public navCtrl: NavController,
    public dataService: DataProvider,
    public loadingCtrl: LoadingController
  ) {
    this.presentLoading();
    this.dataService.getStatsA().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  showData(value) {
    this.navCtrl.push(PlayerPage, { value });
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Loading'
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
    }, 4000);
  }
}
export interface Stats {
  name: string;
  goals: number;
  assists: number;
  eventsplayed: number;
  team: string;
}
