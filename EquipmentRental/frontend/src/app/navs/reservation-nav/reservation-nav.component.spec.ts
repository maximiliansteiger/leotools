import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNavComponent } from './reservation-nav.component';

describe('ReservationNavComponent', () => {
  let component: ReservationNavComponent;
  let fixture: ComponentFixture<ReservationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
