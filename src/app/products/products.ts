import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data'; // Đảm bảo đường dẫn import đúng
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  standalone: false
})
export class Products implements OnInit {
  
  // Mảng rỗng để chứa dữ liệu
  productList: Product[] = [];

  // Nhờ Angular "bơm" (Inject) DataService vào đây
  constructor(private dataService: DataService) {}

  // Khi trang vừa load lên, lập tức chạy sang kho lấy dữ liệu
  ngOnInit() {
    this.productList = this.dataService.getAllProducts();
  }
}