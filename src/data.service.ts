import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:7133';
  
  userData:any='';
  jsonData:any='';
  genreIds: any;

  constructor(private http: HttpClient) { }
  //Get all Genres
  getGenresData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/genres`);
  }

  // Login Details
  registrationDetails(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/UserAccount/register`,data);

  }

  ////// Verify Email Address ///////////////

  verifyEmailId(email:any){
    return this.http.post(`${this.baseUrl}/api/UserAccount/send-email-otp`,email);
  }

  ////// Movie Details //////
  
  getMovieDetails(){
    return this.http.get(`${this.baseUrl}/api/Movie`);
  }

    ////// Movie Details By Genre //////

   getMovieDetailsByGenre(itemId:number){
    return this.http.get(`${this.baseUrl}/api/movies/genres?GenreIds=${itemId}`);
  }

    ////// Movie Details By Genre //////

    /////////Movie Details By Id ///////

    getMovieDetailsById(detailId:number){
      return this.http.get(`${this.baseUrl}/api/Movie/${detailId}`);

    }

    /////////Movie Details By Id ///////

  //////add Genre Data /////
  
  addGenreData(data:any){
      return this.http.post(`${this.baseUrl}/api/genres/api/genres`,data);
    }

  //////add Genre Data /////

//////// Get genre Data Id wise ///////


getGenreDataById(detailId:number){
  return this.http.get(`${this.baseUrl}/api/genres/${detailId}`);
}


//////// Edit GenreData
editGenreData(data:any,detailId:number){
  return this.http.put(`${this.baseUrl}/api/genres/${detailId}`,data);
}

///// Delete Genre Data /////

deleteGenreData(detailId:number){
  return this.http.delete(`${this.baseUrl}/api/genres/${detailId}`);
}

getRoleDetails(emailId:string){
  return this.http.get(`${this.baseUrl}/api/account/${emailId}/details`);
}

///// Get People data //////

getPeopleData(){
  return this.http.get(`${this.baseUrl}/api/People`);
}

addMovieData(data:any){
  return this.http.post(`${this.baseUrl}/api/movies`,data);
}

delMovies(detailId:number){
  return this.http.delete(`${this.baseUrl}/api/movies/${detailId}`);
}

//////// Register User ///////////

register(user: any) {
  return this.http.post(`${this.baseUrl}/api/UserAccount/register`, user, { responseType: 'text' }).pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('An error occurred'));
    })
  );
}

/////// register user //////////


//////// Login User ///////////

login(user: any) {
  return this.http.post(`${this.baseUrl}/api/UserAccount/login`, user, { responseType: 'json' }).pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('An error occurred'));
    })
  );
}

/////// Login user //////////


//////// Logout User ///////////

// Method to log out the user
logout(): void {
  // localStorage.removeItem('Token');
   localStorage.clear();
 }

/////// Logout User /////

verifyEmail(user: any) {
  return this.http.post(`${this.baseUrl}/api/UserAccount/send-email-otp`, user, { responseType: 'text' }).pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('An error occurred'));
    })
  );
}

/////// verify Email /////


////Api Category //////


getMovieApiData(pageNo:number,noOfRecors:number){
  return this.http.get(`${this.baseUrl}/api/Movie?Page=${pageNo}&RecordsPerPage=${noOfRecors}`);
}
  

getDetailsById(id:number){
  return this.http.get(`${this.baseUrl}/api/Movie/${id}`);
}


getFilter(searchtxt:any){
  return this.http.get(`${this.baseUrl}/api/GlobalSearch/search?query=${searchtxt}`);
}


/////// Resend  Otp /////

resendOtp(user: any) {
  return this.http.post(`${this.baseUrl}/api/UserAccount/resend-email-otp`, user, { responseType: 'text' }).pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('An error occurred'));
    })
  );
}

/////// Resend otp /////


///// Subscription Api ///////

paidSubscription(user: any) {
  return this.http.post(`${this.baseUrl}/api/UserAccount/resend-email-otp`, user, { responseType: 'text' }).pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('An error occurred'));
    })
  );
}


///// Subscription Api ///////

}
