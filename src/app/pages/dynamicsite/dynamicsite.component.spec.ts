import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsiteComponent } from './dynamicsite.component';

describe('DynamicsiteComponent', () => {
  let component: DynamicsiteComponent;
  let fixture: ComponentFixture<DynamicsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
