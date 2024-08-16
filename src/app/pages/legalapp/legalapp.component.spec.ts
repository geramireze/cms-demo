import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalappComponent } from './legalapp.component';

describe('LegalappComponent', () => {
  let component: LegalappComponent;
  let fixture: ComponentFixture<LegalappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
