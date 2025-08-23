import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterModule } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductService } from './services/product.service';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, RouterLinkActive, RouterModule, ProductCategoryMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent {
  title = 'eticaret-ui';
}
