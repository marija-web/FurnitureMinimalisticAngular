import { Component, OnInit } from '@angular/core';
import { INav } from '../../interfaces/i-nav';
import { NavService } from '../../services/nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/layout/styles/bootstrap.min.css', '../../../assets/layout/styles/style.css']
})
export class HeaderComponent implements OnInit {

  public nav:INav[]=[];
  title = 'FURNITURE.minimalistic';

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.getNav();
  }

  getNav(): void {
    this.navService.getAll().subscribe((data: INav[]) => {
      this.nav = data;
    })
  }
  
}
