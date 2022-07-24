import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartConfComponent } from './start-conf.component';

describe('StartConfComponent', () => {
  let component: StartConfComponent;
  let fixture: ComponentFixture<StartConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
