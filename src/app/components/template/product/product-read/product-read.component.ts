import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product = {
    name: '',
    price: .0
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(id: number): void {
    this.router.navigate(['/products']);
  }
}
