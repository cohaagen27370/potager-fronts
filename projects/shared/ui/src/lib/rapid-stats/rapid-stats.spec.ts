import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidStats } from './rapid-stats';

describe('RapidStats', () => {
  let component: RapidStats;
  let fixture: ComponentFixture<RapidStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
