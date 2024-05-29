import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { donuts } from '../../interfaces/donuts';
import { DonutsService } from '../../services/donuts.service';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css',
  providers:[DonutsService]
})
export class DonutsComponent implements OnInit{

donuts: donuts | null = null;
gotDonuts: boolean = false;
error: string | null = null;

constructor(private donutsService: DonutsService){}

ngOnInit(): void {
  this.fetchDonuts();
}

fetchDonuts(): void{
  this.donutsService.getAllDonuts().subscribe({
    next: (data: donuts) => {
      this.donuts = data;
      console.log(this.donuts)
      this.error= null;
    },
    error:(error) => {
      console.error('Error fetching donuts data:', error);
      this.error = 'failed to fetch news donut data. Please try again later.';
    }
  });
}




}
