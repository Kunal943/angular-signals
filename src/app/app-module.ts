import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Theme } from './theme/theme';
import { CalculateTotal } from './calculate-total/calculate-total';
import { SearchProducts } from './search-products/search-products';

@NgModule({
  declarations: [
    App,
    Theme,
    CalculateTotal,
    SearchProducts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
