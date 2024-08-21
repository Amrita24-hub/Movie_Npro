import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent {
  data:string | undefined;
  errorMessage:string | undefined;
  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }
  userData:any={
    otp:'',
    email:'',
   };
   userEmailData:any={
    email:'',
   }
 
  /********  User Registration  ******/

  verifyOtp(userData: any) {
    this.userData.otp = this.userData.otp;
    const useremail = localStorage.getItem('useremail');
    this.userData.email=useremail;

    this.dataService.verifyEmail(userData).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.errorMessage = error;
        // Optionally, show a toast notification
        this.toastr.error(this.errorMessage, 'Error');
      }
    );
    this.router.navigate(["login"]);

   /*
    this.dataService.verifyEmail(userData).subscribe(response =>{ 
    //console.log(response);
    this.router.navigate(["login"]);
   });
   */
  
 }

 resendOtp(){
  
  const useremail = localStorage.getItem('useremail');
  this.userEmailData.email=useremail;

  this.dataService.resendOtp(this.userEmailData).subscribe(
    (response) => {
      this.data = response;
    },
    (error) => {
      this.errorMessage = error;
      // Optionally, show a toast notification
      this.toastr.error(this.errorMessage, 'Error');
    }
  );

 }

}
