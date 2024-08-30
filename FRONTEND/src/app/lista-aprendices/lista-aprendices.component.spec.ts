import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAprendicesComponent } from './lista-aprendices.component';

describe('ListaAprendicesComponent', () => {
  let component: ListaAprendicesComponent;
  let fixture: ComponentFixture<ListaAprendicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAprendicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAprendicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
