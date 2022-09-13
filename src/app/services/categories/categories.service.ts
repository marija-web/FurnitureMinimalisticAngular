import { Injectable } from '@angular/core';
import { apiPaths } from 'src/app/config/api';
import { ApiService } from '../api/api.service';
import { ICategories } from 'src/app/interfaces/i-categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<ICategories>{

  constructor(public override http: HttpClient) { 
    super(apiPaths.categories, http);
  }
}
