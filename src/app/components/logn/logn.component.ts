import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logn',
  templateUrl: './logn.component.html',
  styleUrls: ['./logn.component.scss']
})
export class LognComponent {
  data:any;
  errorMessage:string | undefined;
  
  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }
  userData:any={
    email:'',
   };
   userEmailData:any={
    email:'',
   }
   loginDetails:any={
    token:'',
    message:'',
   }
   isRegistered:boolean=false;

  /********  User Registration  ******/

  loginUser(userData: any) {
    this.dataService.login(userData).subscribe(
      (response) => {
         this.data = response;
         const jsonString = JSON.stringify(response);
         const jsonObject = JSON.parse(jsonString);
         this.loginDetails.token=jsonObject.token;
         localStorage.setItem('token', this.loginDetails.token);
         this.toastr.success(this.loginDetails.message, 'Success');
         this.router.navigate(["home"]);
      },
      (error) => {
       // this.errorMessage = error;
       this.errorMessage = 'Invalid User Name or Password';
        // Optionally, show a toast notification
        this.toastr.error('Invalid User Name or Password', 'Error');
      }
    );
    
  }

}
