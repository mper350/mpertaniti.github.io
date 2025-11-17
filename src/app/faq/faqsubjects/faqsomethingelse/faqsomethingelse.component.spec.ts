import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsomethingelseComponent } from './faqsomethingelse.component';

describe('FaqsomethingelseComponent', () => {
  let component: FaqsomethingelseComponent;
  let fixture: ComponentFixture<FaqsomethingelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqsomethingelseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqsomethingelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
