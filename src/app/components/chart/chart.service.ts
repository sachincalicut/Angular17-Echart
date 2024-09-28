import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http: HttpClient) { }

  GetDataCharts(){
    return this.http.get('../../../../public/output.json');
  }

 
}
