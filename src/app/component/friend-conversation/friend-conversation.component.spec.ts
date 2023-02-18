import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendConversationComponent } from './friend-conversation.component';

describe('FriendConversationComponent', () => {
  let component: FriendConversationComponent;
  let fixture: ComponentFixture<FriendConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
