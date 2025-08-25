import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./components/search/search.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from "./components/card-status/card-status.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ProductCategoryMenuComponent, SearchComponent, NgbModule, CardStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent {
  title = 'eticaret-ui';
}
