import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamouspeopleComponent } from './components/famouspeople/famouspeople.component';
import { CommonModule,NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,DonutsComponent,FamouspeopleComponent,CommonModule,NgFor
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'donutLab';
}
