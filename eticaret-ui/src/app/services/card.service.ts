import { Injectable } from '@angular/core';
import { CardItem } from '../common/card-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardItems: CardItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCard(theCardItem: CardItem) {  
    let alreadyExistsInCard: boolean = false;
    let existingCardItem: CardItem | undefined;

    if (this.cardItems.length > 0) {
      existingCardItem = this.cardItems.find(tempCardItem => tempCardItem.id === theCardItem.id);
      alreadyExistsInCard = (existingCardItem != undefined);
    }

    if (alreadyExistsInCard) {
      existingCardItem!.quantity++;
    } else {
      this.cardItems.push(theCardItem);
    }

    this.computeCardTotals();
  }

  computeCardTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCardItem of this.cardItems) {
      totalPriceValue += currentCardItem.unitPrice * currentCardItem.quantity;
      totalQuantityValue += currentCardItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
  decrementQuantity(theCardItem: CardItem) {
    theCardItem.quantity--;

    if (theCardItem.quantity === 0) {
      this.remove(theCardItem);
    } else {
      this.computeCardTotals();
    }
  }
  remove(theCardItem: CardItem) {
    const itemIndex = this.cardItems.findIndex(tempCardItem => tempCardItem.id === theCardItem.id);

    if (itemIndex > -1) {
      this.cardItems.splice(itemIndex, 1);
      this.computeCardTotals();
    }
  }
}
