import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSectionComponent } from './container-section.component';

describe('ContainerSectionComponent', () => {
  let component: ContainerSectionComponent;
  let fixture: ComponentFixture<ContainerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
