import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOtpComponent } from './subscription-otp.component';

describe('SubscriptionOtpComponent', () => {
  let component: SubscriptionOtpComponent;
  let fixture: ComponentFixture<SubscriptionOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
