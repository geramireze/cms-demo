import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesibilityBarComponent } from './accesibility-bar.component';

describe('AccesibilityBarComponent', () => {
  let component: AccesibilityBarComponent;
  let fixture: ComponentFixture<AccesibilityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesibilityBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesibilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
