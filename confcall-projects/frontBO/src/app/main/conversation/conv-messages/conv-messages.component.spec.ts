import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvMessagesComponent } from './conv-messages.component';

describe('ConvMessagesComponent', () => {
  let component: ConvMessagesComponent;
  let fixture: ComponentFixture<ConvMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
