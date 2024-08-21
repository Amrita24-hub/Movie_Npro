import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  constructor(private formbuilder: FormBuilder,private dataService: DataService,private router: Router,private toastr: ToastrService) {
  }

  paidSubscription(){
    this.router.navigate(["subscription-verification"]);
  }

}
