import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentNavComponent } from './equipment-nav.component';

describe('EquipmentNavComponent', () => {
  let component: EquipmentNavComponent;
  let fixture: ComponentFixture<EquipmentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
