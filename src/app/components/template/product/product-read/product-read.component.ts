import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
  }

  deletById(id:string): void {
    this.productService.deleteById(id).subscribe(() => {
      this.productService.showMessage("Produto Deletado!");
      this.getAll();
    });
  }

  getAll(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }
}
