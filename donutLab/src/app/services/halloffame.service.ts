import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HallOfFame } from '../interfaces/HallOfFame';


@Injectable({
  providedIn: 'root'
})
export class HalloffameService {

  private hallOfFameUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  
  
  
  constructor(private http: HttpClient) { }

  GetHallOfFame(): Observable<HallOfFame>{
    return this.http.get<HallOfFame>(this.hallOfFameUrl);
  }

}
