import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  data:string | undefined;
  errorMessage:string | undefined;
  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }
  userData:any={
    fullname:'',
    email:'',
    password:'',
    confirmpassword:'',
    phonenumber:'',
   };
   userEmailData:any={
    email:'',
   }

   isRegistered:boolean=false;

  /********  User Registration  ******/

   registerUser(userData: any) {
    this.userData.name = this.userData.fullname;
    this.userData.email = this.userData.email; 
    this.userData.password = this.userData.password;
    this.userData.confirmpassword = this.userData.confirmpassword;
    this.userData.phonenumber = this.userData.phonenumber; 
    
    /*
    this.dataService.register(userData).subscribe(response =>{ 
    console.log(response);
    this.router.navigate(["verify-email"]);
   
   });
   */

   this.dataService.register(userData).subscribe(
    (response) => {
      this.data = response;
      this.router.navigate(["verify-email"]);
    },
    (error) => {
      this.errorMessage = error;
      // Optionally, show a toast notification
      this.toastr.error(this.errorMessage, 'Error');
    }
  );
  
   
 }

}
