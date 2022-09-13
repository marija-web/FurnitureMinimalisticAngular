import { Component, OnInit } from '@angular/core';
import { IProducts } from '../interfaces/i-products';
import { ICategories } from '../interfaces/i-categories';
import { ProductsService } from '../services/products/products.service';
import { CategoriesService } from '../services/categories/categories.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['../../assets/layout/styles/bootstrap.min.css', '../../assets/layout/styles/style.css']
})
export class GalleryComponent implements OnInit {

  public products:IProducts[]=[];
  public categories:ICategories[]=[];
  public selectedIndex:number = 0;
  public noProductsMessage="Sorry. No products!";
  
  constructor(private productsService:ProductsService, private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    this.productsService.getAll().subscribe((data: IProducts[]) => {
      this.products = data;
    })
  }

  getCategories(): void {
    this.categoriesService.getAll().subscribe((data: ICategories[]) => {
      this.categories = data;
    })
  }

  filterProducts(idCat:number, index:number): void{
    this.selectedIndex = index;
    this.productsService.getAll().subscribe((data:IProducts[]) => {
      if(idCat === 1){
        this.products=data;
      }
      else{
        this.products = data.filter((el: any) => el.idCategory === idCat);
      }
    });
  }

  searchProducts:any;

}
