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
}
