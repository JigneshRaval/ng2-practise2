import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <product-list></product-list>
    
    <!-- Example 1 : Data passing between components -->
    <parent-component1></parent-component1>

    <!-- Example 2 : Data passing between components -->
    <rio-parent></rio-parent>
  `
})
export class AppComponent {

}