import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  public getTeamDataWithId(url: string) {
    return this.http.get(url).map((response: any) => {
      return this.getTeamObject(response[`data`]);
    });
  }

  public getTeamObject(value: any) {
    var TeamArray = [];
    var teamData = Object.keys(value).map(function(key) {
      return [Number(key), value[key]];
    });
    teamData.forEach(element => {
      var objet = {};
      for (var i = 0; i < element.length; i++) {
        if (i < 1) {
          objet['id'] = element[i];
        } else {
          objet['a'] = element[i].a;
          objet['d'] = element[i].d;
          objet['f'] = element[i].f;
          objet['gd'] = element[i].gd;
          objet['l'] = element[i].l;
          objet['name'] = element[i].name;
          objet['p'] = element[i].p;
          objet['pos'] = element[i].pos;
          objet['pts'] = element[i].pts;
          objet['w'] = element[i].w;
        }
      }
      TeamArray.push(objet);
    });
    TeamArray.shift();
    return TeamArray;
  }

  public filterData(data: any, team: any) {
    return data.filter(data => data.team == team);
  }

  public getData(url: string) {
    return this.http
      .get(url)

      .map((response: any) => {
        return this.convertObjToArray(response['data']);
      });
  }

  public convertObjToArray(array) {
    var returnArray = [];

    array = Object.keys(array).map(function(key) {
      return [Number(key), array[key]];
    });

    array.forEach(element => {
      returnArray.push(element[1]);
    });
    returnArray.shift();
    return returnArray;
  }
  getStatsA() {
    return this.http
      .get('http://pesfm.org/wp-json/sportspress/v2/sp_list/3215')
      .map((response: any) => {
        return this.convertObjToArray(response['data']);
      });
  }
  getStatsB() {
    return this.http
      .get('http://pesfm.org/wp-json/sportspress/v2/sp_list/3214')
      .map((response: any) => {
        return this.convertObjToArray(response['data']);
      });
  }
}
