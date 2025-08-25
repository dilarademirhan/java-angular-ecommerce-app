import { Product } from "./product";

export class CardItem {
    id: string;
    name: string;
    unitPrice: number;
    imageUrl: string;
    quantity: number;

    constructor(prouct: Product){
        this.id = prouct.id!;
        this.name = prouct.name!;
        this.unitPrice = prouct.unitPrice!;
        this.imageUrl = prouct.imageUrl!;
        this.quantity = 1;
    }
}
