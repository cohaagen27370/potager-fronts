import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonStrip } from './season-strip';

describe('SeasonStrip', () => {
  let component: SeasonStrip;
  let fixture: ComponentFixture<SeasonStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonStrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonStrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
