import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product | any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.productService.findById(id).subscribe((product) => {

        let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
        currencyPipe.transform(product.price, 'BRL', true);
        this.product = product;
      });
    }

    updateProduct(): void {
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage('Produto Atualizado!');
        this.router.navigate(['/products']);
      });
    }
  }
