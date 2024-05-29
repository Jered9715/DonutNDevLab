import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { donuts } from '../interfaces/donuts';


@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  
  
  constructor(private http: HttpClient) { }

  getAllDonuts(): Observable<donuts>{
    return this.http.get<donuts>(this.apiUrl)
  }
}
