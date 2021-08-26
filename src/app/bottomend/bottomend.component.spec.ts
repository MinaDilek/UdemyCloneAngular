import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomendComponent } from './bottomend.component';

describe('BottomendComponent', () => {
  let component: BottomendComponent;
  let fixture: ComponentFixture<BottomendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
