import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModelPlant} from '../models/model-plant';

const url = 'http://localhost:3000/plants';

@Injectable({
  providedIn: 'root'
})
export class ApiPlantsService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ModelPlant[]> {
    return this.http.get<ModelPlant[]>(url);
  }

  public add(p: ModelPlant): Observable<ModelPlant> {
    return this.http.post<ModelPlant>(url, p);
  }

  public update(p: ModelPlant): Observable<ModelPlant> {
    return this.http.put<ModelPlant>(url + '/' + p.id, p);
  }

  public delete(p: ModelPlant): Observable<ModelPlant> {
    return this.http.delete<ModelPlant>(url + '/' + p.id);
  }
}
