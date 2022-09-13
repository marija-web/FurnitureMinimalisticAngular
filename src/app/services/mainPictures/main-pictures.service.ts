import { Injectable } from '@angular/core';
import { apiPaths } from 'src/app/config/api';
import { ApiService } from '../api/api.service';
import { IMainPictures } from 'src/app/interfaces/i-main-pictures';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainPicturesService extends ApiService<IMainPictures>{

  constructor(public override http: HttpClient) {
    super(apiPaths.mainPictures, http);
   }
}
