import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
  
  data:string | undefined;
  errorMessage:string | undefined;

  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }
  userData:any={
    email:'',
   };
 
   isRegistered:boolean=false;

  /********  User Registration  ******/

  verifyEmail(userData: any) {
    this.userData.email = this.userData.email;
    localStorage.setItem('useremail', this.userData.email);

   /*
    this.dataService.verifyEmail(userData).subscribe(response =>{ 
    console.log(response);
    this.router.navigate(["verify-otp"]);
   });
   */

   this.dataService.verifyEmail(userData).subscribe(
    (response) => {
      this.data = response;
      this.router.navigate(["verify-otp"]);
    },
    (error) => {
      this.errorMessage = error;
      // Optionally, show a toast notification
      this.toastr.error(this.errorMessage, 'Error');
    }
  );
    

}

}
