import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsubjectsComponent } from './faqsubjects.component';

describe('FaqsubjectsComponent', () => {
  let component: FaqsubjectsComponent;
  let fixture: ComponentFixture<FaqsubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsubjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqsubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
