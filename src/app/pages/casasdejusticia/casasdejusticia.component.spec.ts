import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasdejusticiaComponent } from './casasdejusticia.component';

describe('CasasdejusticiaComponent', () => {
  let component: CasasdejusticiaComponent;
  let fixture: ComponentFixture<CasasdejusticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasasdejusticiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasasdejusticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
