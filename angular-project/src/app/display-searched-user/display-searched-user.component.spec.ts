import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchedUserComponent } from './display-searched-user.component';

describe('DisplaySearchedUserComponent', () => {
  let component: DisplaySearchedUserComponent;
  let fixture: ComponentFixture<DisplaySearchedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySearchedUserComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearchedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});