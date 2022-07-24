import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPendingListComponent } from './students-pending-list.component';

describe('StudentsPendingListComponent', () => {
  let component: StudentsPendingListComponent;
  let fixture: ComponentFixture<StudentsPendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPendingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
