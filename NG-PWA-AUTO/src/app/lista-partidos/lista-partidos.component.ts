import { Component, OnInit } from '@angular/core';
import { FootbalService } from '../footbal-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.scss']
})
export class ListaPartidosComponent implements OnInit {
  listaDePartidos$: Observable<any>;
  dateOptions = {
    month: 'short',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Guatemala'
  };


  constructor(private fbService: FootbalService) { }

  ngOnInit() {
    this.listaDePartidos$ = this.fbService.getTodosLosPartidos();
  }

}
