import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerklisteComponent } from './merkliste.component';

describe('MerklisteComponent', () => {
  let component: MerklisteComponent;
  let fixture: ComponentFixture<MerklisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerklisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerklisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
