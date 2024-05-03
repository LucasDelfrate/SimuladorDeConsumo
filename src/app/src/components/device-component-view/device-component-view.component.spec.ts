import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceComponentViewComponent } from './device-component-view.component';

describe('DeviceComponentViewComponent', () => {
  let component: DeviceComponentViewComponent;
  let fixture: ComponentFixture<DeviceComponentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceComponentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
