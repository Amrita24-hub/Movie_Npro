import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LognComponent } from './components/logn/logn.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr'; 
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SubscriptionOtpComponent } from './components/subscription-otp/subscription-otp.component';
import { SubscriptionVerificationComponent } from './components/subscription-verification/subscription-verification.component';
import { SubscriptionPaymentComponent } from './components/subscription-payment/subscription-payment.component';
import { HighlighterDirective } from './highlighter.directive';



/*
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from './app-translate-loader';

*/

// import ngx-translate and the http loader
/*
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from './app-translate-loader';
*/

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LognComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieDetailComponent,
    ContactsComponent,
    BlogsComponent,
    TvshowsComponent,
    SubscriptionComponent,
    VerifyEmailComponent,
    VerifyOtpComponent,
    SubscriptionOtpComponent,
    SubscriptionVerificationComponent,
    SubscriptionPaymentComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
 
    /*
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    */

    /*
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
   */
    BrowserAnimationsModule, // Required for Toastr animations
    ToastrModule.forRoot({ // ToastrModule configuration
      timeOut: 3000, // Duration of the toast
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true, // Prevent duplicate toasts
      closeButton: true // Show close button
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

