import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerPrimaryComponent } from './danger-primary.component';

describe('DangerPrimaryComponent', () => {
  let component: DangerPrimaryComponent;
  let fixture: ComponentFixture<DangerPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
