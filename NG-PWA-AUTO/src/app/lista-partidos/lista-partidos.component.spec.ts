import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPartidosComponent } from './lista-partidos.component';

describe('ListaPartidosComponent', () => {
  let component: ListaPartidosComponent;
  let fixture: ComponentFixture<ListaPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
