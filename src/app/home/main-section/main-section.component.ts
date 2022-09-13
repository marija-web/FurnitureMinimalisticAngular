import { Component, OnInit } from '@angular/core';
import { IMainPictures } from 'src/app/interfaces/i-main-pictures';
import { MainPicturesService } from '../../services/mainPictures/main-pictures.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['../../../assets/layout/styles/bootstrap.min.css', '../../../assets/layout/styles/style.css']
})
export class MainSectionComponent implements OnInit {

  public mainPictures:IMainPictures[]=[];

  constructor(private mainPicturesService:MainPicturesService) { }

  ngOnInit(): void {
    this.getMainPictures();
  }

  getMainPictures(): void {
    this.mainPicturesService.getAll().subscribe((data: IMainPictures[]) => {
      this.mainPictures = data;
    })
  }

}
