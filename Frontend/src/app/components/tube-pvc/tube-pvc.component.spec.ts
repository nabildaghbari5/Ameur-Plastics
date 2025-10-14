import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubePvcComponent } from './tube-pvc.component';

describe('TubePvcComponent', () => {
  let component: TubePvcComponent;
  let fixture: ComponentFixture<TubePvcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TubePvcComponent]
    });
    fixture = TestBed.createComponent(TubePvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
