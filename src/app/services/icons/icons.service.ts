import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { apiPaths } from 'src/app/config/api';
import { IIcons } from 'src/app/interfaces/i-icons';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IconsService extends ApiService<IIcons>{

  constructor(public override http: HttpClient) {
    super(apiPaths.icons, http);
   }
}
