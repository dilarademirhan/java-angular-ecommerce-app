import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-status',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-status.component.html',
  styleUrl: './card-status.component.css'
})
export class CardStatusComponent {
  totalPrice: number = 0;
  totalQuantity: number = 0;
  
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.updateCardStatus();
  }

  updateCardStatus() {
    this.cardService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cardService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
