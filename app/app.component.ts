import { Component } from '@angular/core';

@Component({
  selector: 'aon-app',
  template: `

    <!-- Aon Header start -->
    <ah-header></ah-header>
    <!-- Aon Header end -->

    <!-- Aon Content start -->
    <ah-content></ah-content>
    <!-- Aon Content end -->

    <!-- Aon Footer start -->
    <ah-footer></ah-footer>
    <!-- Aon Footer end -->
    <product-list></product-list>
  `
})
export class AppComponent {

}