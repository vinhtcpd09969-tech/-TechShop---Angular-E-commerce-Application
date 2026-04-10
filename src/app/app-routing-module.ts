import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Đã sửa lại đường dẫn trỏ thẳng vào tên file .ts thực tế của bạn
import { Home } from './home/home'; 
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';
import { PageNotFound } from './page-not-found/page-not-found';
import { UserForm } from './user-form/user-form';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetail }, 
  { path: 'new-user', component: UserForm },
  { path: '**', component: PageNotFound } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }