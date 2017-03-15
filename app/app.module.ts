import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AhHeader } from './header/header.component';
import { AhFooter } from './footer/footer.component';
import { AhContent } from './content/content.component';
import { RatingComponent } from './shared/components/star-rating/rating.component';
import { ProductListComponent } from './shared/components/products-list/product-list.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AhHeader, AhFooter, AhContent, RatingComponent, ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}