import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceUserMainComponent } from './espace-user-main.component';

describe('EspaceUserMainComponent', () => {
  let component: EspaceUserMainComponent;
  let fixture: ComponentFixture<EspaceUserMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceUserMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
