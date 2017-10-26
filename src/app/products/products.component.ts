<<<<<<< HEAD
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from "../models/product";
import 'rxjs/add/operator/switchMap'
=======
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
>>>>>>> 69370c00df571045d278cac90ac9a560e918feb2

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
<<<<<<< HEAD
export class ProductsComponent implements OnInit,OnDestroy {

  products:Product[]=[];  
  category:string;
  filteredProducts:Product[];
  cart;
  subscription:Subscription;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private cartService:ShoppingCartService
   ) 
  { 

    this.productService.getAll().switchMap(p=>{
      this.products=p;
      return this.route.queryParamMap;
      })
      .subscribe(params=>{
      this.category=params.get('category');

      this.filteredProducts=(this.category)?
      this.products.filter(p=>p.category===this.category):
      this.products;
      }
    );
  }
  async ngOnInit() {
      this.subscription=(await this.cartService.getCart())
      .subscribe(cart=>this.cart=cart);
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
=======
export class ProductsComponent  {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService
  ) {
    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        
        this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.category === this.category) : 
          this.products;
      });
>>>>>>> 69370c00df571045d278cac90ac9a560e918feb2
  }
  

}
