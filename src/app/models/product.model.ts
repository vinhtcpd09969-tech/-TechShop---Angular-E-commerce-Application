// 1. Khuôn mẫu cho Dữ liệu Sản phẩm
export interface Product {
  id: string;
  name: string;
  reviewsCount: string;
  price: string;
  priceNumeric: number;
  originalPrice: string;
  description: string;
  // images chung sẽ bị bỏ đi, thay vào đó là cấu trúc này:
  imageSlider: {
    blue: string[]; // Mảng ảnh cho màu xanh
    skin: string[]; // Mảng ảnh cho màu da
    white: string[]; // Mảng ảnh cho màu trắng
    black: string[]; // Mảng ảnh cho màu đen
    grey: string[]; // Mảng ảnh cho màu xám
  };
}

// 2. Khuôn mẫu cho Dữ liệu khi Mua hàng / Thêm giỏ hàng
export interface OrderEvent {
  product: Product;
  size: string;
  quantity: number;
  colorIndex: number;
}

// 3. Khuôn mẫu cho Dữ liệu khi Thả tim
export interface FavoriteEvent {
  product: Product;
  isLiked: boolean;
}