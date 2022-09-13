import { Injectable } from '@angular/core';
import { apiPaths } from 'src/app/config/api';
import { ApiService } from '../api/api.service';
import { IProducts } from 'src/app/interfaces/i-products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<IProducts>{

  constructor(public override http:HttpClient) { 
    super(apiPaths.products, http);
  }
}
