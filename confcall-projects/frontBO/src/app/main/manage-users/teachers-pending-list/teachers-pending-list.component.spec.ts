import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPendingListComponent } from './teachers-pending-list.component';

describe('TeachersPendingListComponent', () => {
  let component: TeachersPendingListComponent;
  let fixture: ComponentFixture<TeachersPendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersPendingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
