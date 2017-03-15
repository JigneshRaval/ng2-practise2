import { Component } from '@angular/core';
import { Product } from './product-list';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
    public title: string = "Product Lists";

    public products = [
        new Product(1, "Soap"),
        new Product(25, " Ice Cream")
    ]
}