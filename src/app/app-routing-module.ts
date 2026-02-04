import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateTotal } from './calculate-total/calculate-total';
import { SearchProducts } from './search-products/search-products';
import { Theme } from './theme/theme';

const routes: Routes = [
  { path: 'calculate-total', component: CalculateTotal },
  { path: 'search-products', component: SearchProducts },
  { path: 'theme', component: Theme },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
