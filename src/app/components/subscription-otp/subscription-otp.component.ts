import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-otp',
  templateUrl: './subscription-otp.component.html',
  styleUrls: ['./subscription-otp.component.scss']
})
export class SubscriptionOtpComponent {

  data:any;
  otpPart1: string = '';
  otpPart2: string = '';
  otpPart3: string = '';
  otpPart4: string = '';

  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService){}
   verifyOtp() {
    const otp = this.otpPart1 + this.otpPart2 + this.otpPart3;
    this.dataService.verifyOtp(otp).subscribe(
      (response) => {
         this.data = response;
         const jsonString = JSON.stringify(response);
         const jsonObject = JSON.parse(jsonString);
        // this.loginDetails.token=jsonObject.token;
        // this.toastr.success(this.loginDetails.message, 'Success');
         this.router.navigate(["subscription-verification"]);
      },
      (error) => {
        // Optionally, show a toast notification
        this.toastr.error('Subscription Error', 'Error');
      }
    );
  }

}
