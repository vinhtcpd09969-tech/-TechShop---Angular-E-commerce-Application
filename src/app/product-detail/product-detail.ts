import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 1. Công cụ để đọc đường dẫn URL
import { DataService } from '../services/data';   // 2. Nhà kho chứa dữ liệu
import { Product, OrderEvent } from '../models/product.model';
import { ToastrService } from 'ngx-toastr'; // Thêm dòng này

// Tạo một interface nhỏ để định nghĩa cấu trúc của Màu sắc
interface ColorDef {
  key: 'blue' | 'skin' | 'white' | 'black' | 'grey';
  hex: string;
  name: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
  standalone: false 
})
export class ProductDetail implements OnInit {
  
  // 3. Bỏ @Input(), chuyển thành biến bình thường (có thể undefined nếu mã ID sai)
  product: Product | undefined; 

  currentIndex = 0;
  selectedSize: string = 'M'; 
  quantity: number = 1;       
  isLiked: boolean = false;   
  selectedColorKey: 'blue' | 'skin' | 'white' | 'black' | 'grey' = 'blue';

  // TỪ ĐIỂN MÀU SẮC
  readonly COLOR_DICTIONARY: ColorDef[] = [
    { key: 'blue', hex: '#0d6efd', name: 'Xanh nước biển' },
    { key: 'skin', hex: '#f1c27d', name: 'Màu da' },
    { key: 'white', hex: '#ffffff', name: 'Màu trắng' },
    { key: 'black', hex: '#000000', name: 'Màu đen' },
    { key: 'grey', hex: '#808080', name: 'Màu xám' }
  ];

  // 4. Nhờ Angular "bơm" 2 công cụ đọc URL và lấy Dữ liệu vào
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  // LỌC MÀU SẮC THỰC TẾ CỦA SẢN PHẨM
  get availableColors(): ColorDef[] {
    if (!this.product || !this.product.imageSlider) return [];
    
    return this.COLOR_DICTIONARY.filter(color => {
      // Dùng dấu ! báo cho TypeScript biết this.product chắc chắn tồn tại ở bước này
      const imagesOfColor = this.product!.imageSlider[color.key];
      return imagesOfColor && imagesOfColor.length > 0;
    });
  }

  // 5. CHẠY KHI VỪA VÀO TRANG: LẤY ID TỪ URL VÀ TÌM SẢN PHẨM
  ngOnInit() {
    // Nhìn lên thanh địa chỉ, bóc lấy cái mã ID (VD: 'SP001')
    const id = this.route.snapshot.paramMap.get('id');

    // Chạy vào kho DataService để xin đúng chiếc áo đó
    if (id) {
      this.product = this.dataService.getProductById(id);
    }

    // Tự động chọn màu đầu tiên nếu tìm thấy sản phẩm
    if (this.product && this.availableColors.length > 0) {
      this.selectedColorKey = this.availableColors[0].key;
    }
  }

  // CÁC HÀM XỬ LÝ ẢNH VÀ GIAO DIỆN (Giữ nguyên)
  get currentProductImages(): string[] {
    if (this.product && this.product.imageSlider) {
      return this.product.imageSlider[this.selectedColorKey] || [];
    }
    return [];
  }

  nextImage() {
    if (this.currentProductImages.length > 0 && this.currentIndex < this.currentProductImages.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    if (this.currentProductImages.length > 0 && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.currentProductImages.length > 0) {
      this.currentIndex = this.currentProductImages.length - 1;
    }
  }

  selectColor(colorKey: 'blue' | 'skin' | 'white' | 'black' | 'grey') {
    this.selectedColorKey = colorKey;
    this.currentIndex = 0; 
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // 6. SỬA LẠI LOGIC THÊM GIỎ HÀNG: Lưu thẳng vào LocalStorage
onAddToCart() {
    if (!this.product) return;

    const colorMap: Record<string, number> = { blue: 0, skin: 1, white: 2, black: 3, grey: 4 };
    const orderData: OrderEvent = {
      product: this.product,
      size: this.selectedSize,
      quantity: this.quantity,
      colorIndex: colorMap[this.selectedColorKey] 
    };

    const savedCart = localStorage.getItem('myCart_Lab3');
    let cart: OrderEvent[] = savedCart ? JSON.parse(savedCart) : [];
    cart.push(orderData);
    localStorage.setItem('myCart_Lab3', JSON.stringify(cart));

    // Dùng Toastr báo thành công màu xanh lá cực mượt
    this.toastr.success(
      `Phân loại: Size ${this.selectedSize}, SL: ${this.quantity}`, 
      `🛍️ Đã thêm ${this.product.name}!`
    );
  }

  onBuyNow() {
    // Tạm thời chức năng Mua Ngay sẽ giống Thêm vào giỏ hàng
    this.onAddToCart();
    // Sau này có trang Thanh toán, mình có thể thêm lệnh chuyển trang (Router.navigate) ở đây
  }
  
  onToggleFavorite() {
    this.isLiked = !this.isLiked; 
    
    // Nếu thích thì báo màu xanh (success), bỏ thích thì báo màu xanh dương (info)
    if (this.isLiked) {
      this.toastr.success('Đã thêm sản phẩm vào danh sách Yêu thích!', '❤️ Yêu thích');
    } else {
      this.toastr.info('Đã bỏ sản phẩm khỏi danh sách Yêu thích.', '🤍 Bỏ thích');
    }
  }
  // ==========================================
  // THÊM BIẾN QUẢN LÝ TABS (Mô tả, Size, Đánh giá)
  // ==========================================
  activeTab: string = 'description'; // Mặc định vừa vào sẽ mở tab Mô tả

  // Hàm chuyển tab
  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}