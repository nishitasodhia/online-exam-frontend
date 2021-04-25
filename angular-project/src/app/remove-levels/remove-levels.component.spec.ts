import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLevelsComponent } from './remove-levels.component';

describe('RemoveLevelsComponent', () => {
  let component: RemoveLevelsComponent;
  let fixture: ComponentFixture<RemoveLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
