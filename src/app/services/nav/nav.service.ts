import { Injectable } from '@angular/core';
import { INav } from 'src/app/interfaces/i-nav'; 
import { ApiService } from '../api/api.service';
import { apiPaths } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavService extends ApiService<INav>{

  constructor(public override http: HttpClient) { 
    super(apiPaths.nav, http);
  }
}
