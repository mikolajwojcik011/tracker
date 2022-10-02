import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthFormComponent } from './input-auth-form.component';

describe('InputAuthFormComponent', () => {
  let component: InputAuthFormComponent;
  let fixture: ComponentFixture<InputAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuthFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
