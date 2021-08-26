import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomcategoryComponent } from './bottomcategory.component';

describe('BottomcategoryComponent', () => {
  let component: BottomcategoryComponent;
  let fixture: ComponentFixture<BottomcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
