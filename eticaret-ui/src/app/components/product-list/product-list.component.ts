import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule, NgForOf } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    
  products: Product[] = [];

  currentCategoryId: number = 1; // Default category ID

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
    }    );
  }

  listProducts() {
    this.currentCategoryId = +this.route.snapshot.paramMap.get('id')! || 1;

    this.productService.getProductList(this.currentCategoryId).subscribe({
      next: (data) => {
        console.log('Response data:', data);
        this.products = data;
      }
    });
  }
}
