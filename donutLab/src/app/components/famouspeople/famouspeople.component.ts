import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallOfFame } from '../../interfaces/HallOfFame';
import { HalloffameService } from '../../services/halloffame.service';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-famouspeople',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './famouspeople.component.html',
  styleUrl: './famouspeople.component.css',
  providers:[HalloffameService]
})
export class FamouspeopleComponent implements OnInit{
hallOfFame: HallOfFame | null = null;
gotHallOfFame: boolean = false;
error: string | null = null;


constructor(private hallOfFameService: HalloffameService ){}

ngOnInit(): void {
  this.fetchHallOfFame;
}

fetchHallOfFame(): void{
  this.hallOfFameService.GetHallOfFame().subscribe({
    next: (data: HallOfFame)=> {
      this.hallOfFame= data;
      console.log(this.hallOfFame)
      this.error=null;
    },
    error:(error)=> {
      console.error('error fetching halloffame data:', error);
      this.error = 'failed to fetch halloffame data. Please try again later.'
    }
  });
}
}
