import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/products';
  private apiCategoryUrl = 'http://localhost:8080/product-category';

  constructor(private http: HttpClient) {}

  getProductList(categoryId: number): Observable<Product[]> {
    const url = categoryId
      ? `${this.apiUrl}/search/findByCategoryId?id=${categoryId}`
      : this.apiUrl;

      console.log(`Fetching products from URL: ${url}`);

    return this.http.get<GetResponseProducts>(url).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<GetResponseProductCategory>(this.apiCategoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  deleteProduct(sku: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${sku}`);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    console.log(`Fetching products from URL: ${searchUrl}`);
    return this.http.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
