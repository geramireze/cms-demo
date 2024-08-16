import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaCriminalComponent } from './politica-criminal.component';

describe('PoliticaCriminalComponent', () => {
  let component: PoliticaCriminalComponent;
  let fixture: ComponentFixture<PoliticaCriminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaCriminalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticaCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
