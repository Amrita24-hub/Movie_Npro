import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { CommonService } from 'src/app/common_service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subscription-payment',
  templateUrl: './subscription-payment.component.html',
  styleUrls: ['./subscription-payment.component.scss']
})
export class SubscriptionPaymentComponent {
 data:any;
constructor(private dataService: DataService,private router: Router, private commonService: CommonService,private translate: TranslateService){}
userData:any={
  email:'',
  phonenumber:'',
 };
 
/**** Subscription Details *****/

subscriptionDetails(userData: any) {
  this.dataService.paidSubscription(userData).subscribe(
    (response) => {
       this.data = response;
       const jsonString = JSON.stringify(response);
       const jsonObject = JSON.parse(jsonString);
     //  this.loginDetails.token=jsonObject.token;
       //localStorage.setItem('token', this.loginDetails.token);
    //   this.toastr.success(this.loginDetails.message, 'Success');
       this.router.navigate(["home"]);
    },
    (error) => {
     // this.errorMessage = error;
     //this.errorMessage = 'Invalid User Name or Password';
      // Optionally, show a toast notification
     // this.toastr.error('Invalid User Name or Password', 'Error');
    }
  );
  
 }

}
