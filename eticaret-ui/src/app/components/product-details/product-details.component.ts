import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { CardItem } from '../../common/card-item';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe({
      next: (data) => {
        console.log('Product details:', data);
        this.product = data;
      }
    });
  }

  addToCard(){
    const theCardItem = new CardItem(this.product);
    this.cardService.addToCard(theCardItem);
  }
}
