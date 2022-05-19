import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModelAccessory} from '../models/model-accessory';

const url = 'http://localhost:3000/accessories';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessoriesService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ModelAccessory[]> {
    return this.http.get<ModelAccessory[]>(url);
  }

  public add(a: ModelAccessory): Observable<ModelAccessory> {
    return this.http.post<ModelAccessory>(url, a);
  }

  public update(a: ModelAccessory): Observable<ModelAccessory> {
    return this.http.put<ModelAccessory>(url + '/' + a.id, a);
  }

  public delete(a: ModelAccessory): Observable<ModelAccessory> {
    return this.http.delete<ModelAccessory>(url + '/' + a.id);
  }
}
