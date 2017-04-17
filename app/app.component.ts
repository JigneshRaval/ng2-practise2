import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
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

    <parent-component1></parent-component1>
  `
})
export class AppComponent {

}