import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AhHeader } from './header/header.component';
import { AhFooter } from './footer/footer.component';
import { AhContent } from './content/content.component';
import { RatingComponent } from './shared/components/star-rating/rating.component';
import { ProductListComponent } from './shared/components/products-list/product-list.component'

// Angular Material Design
// https://material.angular.io/
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent, AhHeader, AhFooter, AhContent, RatingComponent, ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}