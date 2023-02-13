import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPostComponent } from './dialog-add-post.component';

describe('DialogAddPostComponent', () => {
  let component: DialogAddPostComponent;
  let fixture: ComponentFixture<DialogAddPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
