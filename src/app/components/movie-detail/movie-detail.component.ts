import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  isVisible:boolean=true;
  movieData:any[]=[];
  detailId:any;
  getMovieDetails:any;
  movieDetailData:any={
    title:'',
    releaseDate:'',
    summary:'',
    duration:'',
    poster:'',
    language:''
  };
  constructor(private dataService: DataService,private router: Router,private route: ActivatedRoute){}
  ngOnInit(): void {
  // this.getAllCategory(); 
   this.route.queryParamMap.subscribe(params => {
   this.detailId = params.get('id'); // Convert to number
  });

    this.dataService.getDetailsById(this.detailId).subscribe(response => {
    this.getMovieDetails = response;
    const jsonString = JSON.stringify(response);
    const jsonObject = JSON.parse(jsonString);
    console.log("data",jsonObject.data.title);

    this.movieDetailData.title=jsonObject.data.title;
    this.movieDetailData.summary=jsonObject.data.description;
    this.movieDetailData.duration=jsonObject.data.duration;
    this.movieDetailData.poster=jsonObject.data.imageUrl;
    this.movieDetailData.language=jsonObject.data.language;
    
    console.log("movieposter",this.movieDetailData.poster);
    
   });

}

  /***  Generate Pdf from html ***/

   public generatePdfFromHtml(elementId: string): void {
    const data = document.getElementById(elementId);
    
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;
        const pdf = new jsPDF('p', 'mm', 'a4');
        let position = 0;

        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save(this.movieDetailData.title+".pdf");
      });
    }
  }

    /***  Generate Pdf from html ***/



}

  


