import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstanciasPage } from './estancias.page';

describe('EstanciasPage', () => {
  let component: EstanciasPage;
  let fixture: ComponentFixture<EstanciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
