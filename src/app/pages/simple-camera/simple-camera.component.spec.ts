import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCameraComponent } from './simple-camera.component';

describe('SimpleCameraComponent', () => {
  let component: SimpleCameraComponent;
  let fixture: ComponentFixture<SimpleCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
