import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

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
        pdf.save('report.pdf');
      });
    }
  }
}


