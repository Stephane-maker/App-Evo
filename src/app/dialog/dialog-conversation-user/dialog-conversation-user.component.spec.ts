import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConversationUserComponent } from './dialog-conversation-user.component';

describe('DialogConversationUserComponent', () => {
  let component: DialogConversationUserComponent;
  let fixture: ComponentFixture<DialogConversationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConversationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConversationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
