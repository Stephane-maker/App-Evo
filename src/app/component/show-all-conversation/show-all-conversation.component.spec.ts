import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllConversationComponent } from './show-all-conversation.component';

describe('ShowAllConversationComponent', () => {
  let component: ShowAllConversationComponent;
  let fixture: ComponentFixture<ShowAllConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
