import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBtnComponent } from './top-btn.component';

describe('TopBtnComponent', () => {
  let component: TopBtnComponent;
  let fixture: ComponentFixture<TopBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
