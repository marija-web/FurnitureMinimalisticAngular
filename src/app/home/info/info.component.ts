import { Component, OnInit } from '@angular/core';
import { IIcons } from 'src/app/interfaces/i-icons';
import { IconsService } from 'src/app/services/icons/icons.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../../../assets/layout/styles/bootstrap.min.css', '../../../assets/layout/styles/style.css']
})
export class InfoComponent implements OnInit {

  public icons:IIcons[]=[];

  constructor(private iconsService:IconsService) { }

  ngOnInit(): void {
    this.getIcons();
  }

  getIcons(): void {
    this.iconsService.getAll().subscribe((data: IIcons[]) => {
      this.icons = data;
    })
  }

}
