import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-verification',
  templateUrl: './subscription-verification.component.html',
  styleUrls: ['./subscription-verification.component.scss']
})
export class SubscriptionVerificationComponent {
  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }
  userData:any={
    email:'',
    number:'',
   }; 
   
   subscriptionVerification(userData:any){


   }



}
