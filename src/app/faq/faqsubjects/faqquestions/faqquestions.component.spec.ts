import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqquestionsComponent } from './faqquestions.component';

describe('FaqquestionsComponent', () => {
  let component: FaqquestionsComponent;
  let fixture: ComponentFixture<FaqquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqquestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
