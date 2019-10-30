import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private clickedRowSource = new BehaviorSubject([]);
  currentClickedRow = this.clickedRowSource.asObservable();

  private url = 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0';

  constructor(private http: HttpClient) { }

  getData(){
    let params = new HttpParams()
      .set('f','pjson');

    return this.http.get<any>(`${this.url}`,{params});
  }

  changeClickedRow(data: any[]) {
    this.clickedRowSource.next(data);
  }
}
