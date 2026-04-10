import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 1. IMPORT THÊM 2 MODULE CỦA TOASTR VÀ ANIMATION VÀO ĐÂY
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductDetail } from './product-detail/product-detail';
import { Home } from './home/home';
import { Products } from './products/products';
import { PageNotFound } from './page-not-found/page-not-found';
import { ProductItem } from './product-item/product-item';
import { UserForm } from './user-form/user-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, ProductDetail, Home, Products, PageNotFound, ProductItem, UserForm],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    // 2. ĐĂNG KÝ SỬ DỤNG 2 MODULE VÀ CẤU HÌNH GIAO DIỆN TOASTR
    BrowserAnimationsModule, // Bắt buộc phải có trước Toastr
    ToastrModule.forRoot({
      timeOut: 3000, // Tự tắt sau 3 giây
      positionClass: 'toast-top-right', // Hiện ở góc dưới bên phải
      preventDuplicates: true, // Chống hiển thị trùng lặp
      progressBar: true, // Hiện thanh thời gian chạy lùi
      closeButton: true, // Hiện nút X để tắt
    }),
    HttpClientModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
