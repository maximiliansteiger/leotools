import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOverviewReservationComponent } from './teacher-overview-reservation.component';

describe('TeacherOverviewReservationComponent', () => {
  let component: TeacherOverviewReservationComponent;
  let fixture: ComponentFixture<TeacherOverviewReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherOverviewReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherOverviewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
