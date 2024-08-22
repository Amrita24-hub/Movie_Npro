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
constructor(private dataService: DataService,private router: Router, private commonService: CommonService,private translate: TranslateService){}

}
