import { Component } from '@angular/core';
import { CardItem } from '../../common/card-item';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  cardItems: CardItem[] = [];

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cardService: CardService ) { }

  ngOnInit(): void {
    this.listCardDetails();
  }
  listCardDetails() {
    this.cardItems = this.cardService.cardItems;
    this.cardService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    this.cardService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    this.cardService.computeCardTotals();

  }
  incrementQuantity(theCardItem: CardItem) {
    this.cardService.addToCard(theCardItem);
  }
  decrementQuantity(theCardItem: CardItem) {
    this.cardService.decrementQuantity(theCardItem);
  }
 
}
