import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  standalone: false
})
export class ProductItem {
  
  // Nhận dữ liệu 1 sản phẩm từ trang Products truyền xuống
  @Input() product!: Product;

  // Hàm tự động lấy bức ảnh đầu tiên tìm thấy để làm ảnh bìa
  get coverImage(): string {
    if (!this.product || !this.product.imageSlider) return 'https://placehold.co/400x400';
    
    // Duyệt qua các màu (blue, skin, white...), nếu màu nào có ảnh thì lấy ảnh đầu tiên
    const colorKeys = Object.keys(this.product.imageSlider) as (keyof Product['imageSlider'])[];
    for (const key of colorKeys) {
      const images = this.product.imageSlider[key];
      if (images && images.length > 0) {
        return images[0];
      }
    }
    return 'https://placehold.co/400x400?text=No+Image';
  }
}