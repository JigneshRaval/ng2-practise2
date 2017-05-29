"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const product_list_1 = require("./product-list");
let ProductListComponent = class ProductListComponent {
    constructor() {
        this.title = "Product Lists";
        this.products = [
            new product_list_1.Product(1, "Soap"),
            new product_list_1.Product(25, "Ice Cream"),
            new product_list_1.Product(27, "Cake 2122")
        ];
    }
};
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: './product-list.component.html'
    })
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
