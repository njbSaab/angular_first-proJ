import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../../models/product';
import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  title = 'Angular App';
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
    ){
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products;
    //   this.loading = false;
    // })
  }
}
