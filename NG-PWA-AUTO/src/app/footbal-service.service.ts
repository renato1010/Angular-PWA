import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, map, take, tap } from 'rxjs/operators';
import { mapCoutryCode } from './aux-functions/service-aux';

@Injectable()
export class FootbalService {
  private readonly BASE_URL = 'http://api.football-data.org/v1/competitions/467/fixtures';
  private readonly FD_TOKEN = '5aa68225b66a4500ac98207d568b08ec';
  private readonly HEADER_AUTH = {
    'X-Auth-Token': this.FD_TOKEN
  };
  private readonly IMG_BASE_URL = 'http://www.countryflags.io/';
  private readonly IMG_SIZE = '48';

  constructor(private htpp: HttpClient) {}

  getTodosLosPartidos() {
    return this.htpp
      .get(this.BASE_URL, { headers: this.HEADER_AUTH })
      .pipe(
        pluck('fixtures'),
        // @ts-ignore
        map(data => data.slice(0, 48)),
        map(obj => this.insertFlagUrls(obj)),
        tap(data => console.log(data))
      );
  }

  private insertFlagUrls(juegosArr) {
    return juegosArr.map(juegoObj => {
      let { awayTeamName, homeTeamName, date } = juegoObj;
      const awayTeamFlagImg = `${this.IMG_BASE_URL}${mapCoutryCode[awayTeamName]['cod']}/shiny/${
        this.IMG_SIZE
      }.png`;
      const homeTeamFlagImg = `${this.IMG_BASE_URL}${mapCoutryCode[homeTeamName]['cod']}/shiny/${
        this.IMG_SIZE
      }.png`;
      awayTeamName = mapCoutryCode[awayTeamName]['es'];
      homeTeamName = mapCoutryCode[homeTeamName]['es'];
      return { date, awayTeamName, homeTeamName, awayTeamFlagImg, homeTeamFlagImg };
    });
  }
}
