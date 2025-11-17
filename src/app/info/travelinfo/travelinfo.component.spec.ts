import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelinfoComponent } from './travelinfo.component';

describe('TravelinfoComponent', () => {
  let component: TravelinfoComponent;
  let fixture: ComponentFixture<TravelinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
