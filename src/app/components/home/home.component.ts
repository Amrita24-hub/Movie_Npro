import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { CommonService } from 'src/app/common_service';
import { TranslateService } from '@ngx-translate/core';
import { PagerService } from 'src/pagerservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  movieData:any[]=[];
  searchData:any[]=[];
  searchTrue:boolean=false;
  cureentPage:number=1;
  pager:any;
  pagedItems:any;

  constructor(private dataService: DataService,private router: Router, private commonService: CommonService,private translate: TranslateService,private pagerService: PagerService){
    this.translate.setDefaultLang('en');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("datareceived");
  }

  ngOnInit(): void {
   this.getAllCategory();
   Promise.resolve().then(() =>{
    this.commonService.currentMessage.pipe().subscribe(data => {
     if(data) {
      console.log("datareceived", data);
      const jsonString = JSON.stringify(data.appConfig.mydata);
      const jsonObject = jsonString ? JSON.parse(jsonString) : {};
      this.searchData = jsonObject; 
       
      if(this.searchData.length > 0) {
         this.searchTrue=true;
        this.setPage(1);
        }
     }
    });
  });

     const tokenString = localStorage.getItem('token');
     console.log("tokenstring",tokenString);

  }

  getAllCategory()
  {
       this.dataService.getMovieApiData(1,10).subscribe(response =>{ 
        const jsonString = JSON.stringify(response);
        const jsonObject = JSON.parse(jsonString);
        this.movieData=jsonObject.data;
        console.log("response"+this.movieData);

       //this.movieData=response;
     ///  console.log("response",this.movieData);
      //this.router.navigate(["verify-email"]);
   });

  }

  pagination(page:number, prev:string){
    console.log("page",page);
    this.cureentPage = page ? 1 : page;
    if(prev == 'prev' && this.cureentPage > 1 ) {
      this.cureentPage = page - 1;
    } else {
      this.cureentPage = page + 1;
    }

    this.dataService.getMovieApiData(this.cureentPage,10).subscribe(response =>{ 
      const jsonString = JSON.stringify(response);
      const jsonObject = JSON.parse(jsonString);
      this.movieData=jsonObject.data;
      console.log("response"+this.movieData);

  });
  
}

    movieDetail(event:Event,id:number){

      event.preventDefault();
      console.log("inside");
       this.router.navigate(['/movie-detail'], { queryParams:{ id: id }});
    }

    setPage(page: number) {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.searchData.length, page);

      // get current page of items
      this.pagedItems = this.searchData.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

    
}


