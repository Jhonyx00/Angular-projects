import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilterComponent } from './modal-filter.component';

describe('ModalFilterComponent', () => {
  let component: ModalFilterComponent;
  let fixture: ComponentFixture<ModalFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFilterComponent]
    });
    fixture = TestBed.createComponent(ModalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
