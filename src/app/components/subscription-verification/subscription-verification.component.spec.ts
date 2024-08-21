import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionVerificationComponent } from './subscription-verification.component';

describe('SubscriptionVerificationComponent', () => {
  let component: SubscriptionVerificationComponent;
  let fixture: ComponentFixture<SubscriptionVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
