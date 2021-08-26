import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdtextComponent } from './mdtext.component';

describe('MdtextComponent', () => {
  let component: MdtextComponent;
  let fixture: ComponentFixture<MdtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
