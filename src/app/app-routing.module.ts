import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LognComponent } from './components/logn/logn.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { SubscriptionOtpComponent } from './components/subscription-otp/subscription-otp.component';
import { SubscriptionVerificationComponent } from './components/subscription-verification/subscription-verification.component';



const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LognComponent},
  {path:"signUp", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"movie-detail", component:MovieDetailComponent},
  {path:"contancts", component:ContactsComponent},
  {path:"blogs", component:BlogsComponent},
  {path:"tvshows", component:TvshowsComponent},
  {path:"subscription", component:SubscriptionComponent},
  {path:"verify-email", component:VerifyEmailComponent},
  {path:"verify-otp", component:VerifyOtpComponent},
  {path:"subscription-otp", component:SubscriptionOtpComponent},
  {path:"subscription-verification", component:SubscriptionVerificationComponent}

  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
