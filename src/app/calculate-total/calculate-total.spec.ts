import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateTotal } from './calculate-total';

describe('CalculateTotal', () => {
  let component: CalculateTotal;
  let fixture: ComponentFixture<CalculateTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateTotal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateTotal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
