import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfComponent } from './create-conf.component';

describe('CreateConfComponent', () => {
  let component: CreateConfComponent;
  let fixture: ComponentFixture<CreateConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
