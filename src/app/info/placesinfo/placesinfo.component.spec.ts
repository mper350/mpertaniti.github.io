import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesinfoComponent } from './placesinfo.component';

describe('PlacesinfoComponent', () => {
  let component: PlacesinfoComponent;
  let fixture: ComponentFixture<PlacesinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
