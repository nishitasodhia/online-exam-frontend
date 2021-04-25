import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveQuestionDisplayComponent } from './remove-question-display.component';

describe('RemoveQuestionDisplayComponent', () => {
  let component: RemoveQuestionDisplayComponent;
  let fixture: ComponentFixture<RemoveQuestionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveQuestionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
