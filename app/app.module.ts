import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AhHeader } from './header/header.component';
import { AhFooter } from './footer/footer.component';
import { AhContent } from './content/content.component';
import { RatingComponent } from './shared/components/star-rating/rating.component';
import { ProductListComponent } from './shared/components/products-list/product-list.component'

// Example 1 : Data passing between components 
import { ParentComponent1 } from './shared/components/data-passing/parent.component';
import { ChildComponent1 } from './shared/components/data-passing/child.component';

// Example 2 : Data passing between components 
import { RioCounterParentComponent } from './shared/components/data-passing/parent-example2.component'; // Parent Component
import { RioCounterComponent2 } from './shared/components/data-passing/child-example2.component'; // Child Component
import { RioCounterComponent3 } from './shared/components/data-passing/child-example3.component'; // Child Component

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent, AhHeader, AhFooter, AhContent, RatingComponent, ProductListComponent, ParentComponent1, ChildComponent1,
    RioCounterParentComponent, RioCounterComponent2, RioCounterComponent3
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}