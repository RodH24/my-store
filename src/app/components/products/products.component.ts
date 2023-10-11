import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private StoreService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.StoreService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product){
    this.StoreService.addProduct(product);
    this.total = this.StoreService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      console.log('product', data);
    })

  }

}
