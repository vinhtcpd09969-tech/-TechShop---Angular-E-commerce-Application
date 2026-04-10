import { Injectable } from '@angular/core';
// Import interface Product từ file model của bạn (Đảm bảo đường dẫn này đúng)
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root' // root nghĩa là Service này được cung cấp cho toàn bộ ứng dụng
})
export class DataService {

  // BÊ NGUYÊN MẢNG 10 SẢN PHẨM TỪ APP.TS QUA ĐÂY
  private  productList: Product[] = [
    {
      id: 'SP001',
      name: 'Áo Thun Thể Thao Pro Active',
      reviewsCount: '2540+',
      price: '250.000đ',
      priceNumeric: 250000,
      originalPrice: '350.000đ',
      description: 'Chất liệu vải thun lạnh, siêu thấm hút mồ hôi. Phù hợp chạy bộ và tập gym.',
      imageSlider: {
blue: [
        'https://dosi-in.com/images/detailed/42/CDL4_2.jpg',
        'https://aothunhuy.weebly.com/uploads/1/0/2/8/102819584/ao-thun-nam-tron-co-co-xanh-lam_1_orig.jpg'
         // Bạn thêm link ảnh áo xanh vào đây
        
      ],
      skin: [
        'https://4men.com.vn/thumbs/2022/06/ao-thun-slimfit-tag-da-at098-mau-nau-20976-p.JPG',
        'https://ivymoda.com/assets/files/news/2021/11/15/da93af7d7b42ed5404a3b903378c30f0.jpg'
         // Bạn thêm link ảnh áo màu da vào đây
      ],
      white: [
        'https://dosi-in.com/images/detailed/42/CDL11_1.jpg',
        'https://toplist.vn/images/800px/ao-thun-trang-129595.jpg'
        // Bạn thêm link ảnh áo trắng vào đây
      ],
      black: [
         'https://dosi-in.com/images/detailed/42/CDL10_1.jpg',
         'https://aoxuanhe.com/upload/product/axh-098/ao-thun-nam-polo-den-tron-cotton.jpg'
         // Bạn thêm link ảnh áo đen vào đây
      ],
      grey: [
         'https://dosi-in.com/images/detailed/42/CDL3_1.jpg',
         'https://media.fmplus.com.vn/uploads/Chuyen-muc/ao-thun-nam/ao-thun-nam%3Bphan-loai-theo-kieu-dang.jpg'
        // Bạn thêm link ảnh áo xám vào đây (nếu chưa có thì để mảng rỗng [])
       
      ]
      }
    },
    {
      id: 'SP002',
      name: 'Áo Polo Nam Cổ Bẻ Lịch Lãm',
      reviewsCount: '1820+',
      price: '320.000đ',
      priceNumeric: 320000,
      originalPrice: '450.000đ',
      description: 'Thiết kế cổ bẻ thanh lịch, chất vải cá sấu dệt kim cao cấp. Mặc đi làm hay đi chơi đều đẹp.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/0d6efd/white?text=Polo+Xanh+1', 'https://placehold.co/400x400/0d6efd/white?text=Polo+Xanh+2'],
        skin: [], 
        white: ['https://placehold.co/400x400/ffffff/black?text=Polo+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Polo+Den'],
        grey: []
      }
    },
    {
      id: 'SP003',
      name: 'Áo Phông Form Rộng ',
      reviewsCount: '4500+',
      price: '190.000đ',
      priceNumeric: 190000,
      originalPrice: '250.000đ',
      description: 'Phong cách đường phố Streetwear năng động. Cotton 100% dày dặn, đứng form.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/000000/white?text=Oversized+Den'],
        skin: ['https://placehold.co/400x400/000000/white?text=Oversized+Den'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Oversized+Trang+1', 'https://placehold.co/400x400/ffffff/black?text=Oversized+Trang+2'],
        black: ['https://placehold.co/400x400/000000/white?text=Oversized+Den'],
        grey: ['https://placehold.co/400x400/808080/white?text=Oversized+Xam']
      }
    },
    {
      id: 'SP004',
      name: 'Áo Thun Dài Tay Thu Đông',
      reviewsCount: '980+',
      price: '280.000đ',
      priceNumeric: 280000,
      originalPrice: '380.000đ',
      description: 'Giữ ấm cơ thể vào những ngày se lạnh. Bo chun tay áo gọn gàng, chất liệu nỉ da cá.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/0d6efd/white?text=Dai+Tay+Xanh'],
        skin: ['https://placehold.co/400x400/f1c27d/black?text=Dai+Tay+Da'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Dai+Tay+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Dai+Tay+Den'],
        grey: []
      }
    },
    {
      id: 'SP005',
      name: 'Áo Ba Lỗ Thể Thao Muscle',
      reviewsCount: '1200+',
      price: '150.000đ',
      priceNumeric: 150000,
      originalPrice: '200.000đ',
      description: 'Khoe trọn vóc dáng khỏe khoắn. Nách khoét sâu thoải mái vận động tối đa.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/0d6efd/white?text=Ba+Lo+Xanh'],
        skin: [],
        white: ['https://placehold.co/400x400/ffffff/black?text=Ba+Lo+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Ba+Lo+Den'],
        grey: ['https://placehold.co/400x400/808080/white?text=Ba+Lo+Xam']
      }
    },
    {
      id: 'SP006',
      name: 'Áo Cổ V Trơn Cổ Điển',
      reviewsCount: '650+',
      price: '210.000đ',
      priceNumeric: 210000,
      originalPrice: '280.000đ',
      description: 'Thiết kế cổ chữ V nam tính, tôn lên vẻ góc cạnh. Dễ dàng phối cùng áo vest hoặc sơ mi.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/0d6efd/white?text=Co+V+Xanh'],
        skin: ['https://placehold.co/400x400/f1c27d/black?text=Co+V+Da'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Co+V+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Co+V+Den'],
        grey: []
      }
    },
    {
      id: 'SP007',
      name: 'Áo Thun In Họa Tiết Graphic',
      reviewsCount: '3100+',
      price: '290.000đ',
      priceNumeric: 290000,
      originalPrice: '400.000đ',
      description: 'Hình in PET sắc nét, không bong tróc. Khẳng định cá tính mạnh mẽ và độc đáo.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/000000/white?text=Oversized+Den'],
        skin: ['https://placehold.co/400x400/000000/white?text=Oversized+Den'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Graphic+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Graphic+Den'],
        grey: ['https://placehold.co/400x400/808080/white?text=Graphic+Xam']
      }
    },
    {
      id: 'SP008',
      name: 'Áo Nỉ Hoodie Có Mũ',
      reviewsCount: '5200+',
      price: '450.000đ',
      priceNumeric: 450000,
      originalPrice: '600.000đ',
      description: 'Trang phục không thể thiếu cho mùa đông. Có túi bụng siêu to và mũ trùm đầu tiện lợi.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/0d6efd/white?text=Hoodie+Xanh'],
        skin: ['https://placehold.co/400x400/f1c27d/black?text=Hoodie+Da'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Hoodie+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Hoodie+Den'],
        grey: ['https://placehold.co/400x400/808080/white?text=Hoodie+Xam']
      }
    },
    {
      id: 'SP009',
      name: 'Áo Henley Dài Tay Nút Ngực',
      reviewsCount: '890+',
      price: '340.000đ',
      priceNumeric: 340000,
      originalPrice: '450.000đ',
      description: 'Đột phá với hàng cúc ngực tinh tế. Chất liệu waffle (tổ ong) mang lại cảm giác vintage.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/000000/white?text=Oversized+Den'],
        skin: ['https://placehold.co/400x400/f1c27d/black?text=Henley+Da'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Henley+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Henley+Den'],
        grey: ['https://placehold.co/400x400/808080/white?text=Henley+Xam']
      }
    },
    {
      id: 'SP010',
      name: 'Áo Phông Basic Trơn',
      reviewsCount: '12000+',
      price: '120.000đ',
      priceNumeric: 120000,
      originalPrice: '150.000đ',
      description: 'Chiếc áo quốc dân ai cũng cần có. Dễ mặc, dễ giặt, phù hợp với mọi vóc dáng.',
      imageSlider: {
        blue: ['https://placehold.co/400x400/0d6efd/white?text=Basic+Xanh'],
        skin: ['https://placehold.co/400x400/f1c27d/black?text=Basic+Da'],
        white: ['https://placehold.co/400x400/ffffff/black?text=Basic+Trang'],
        black: ['https://placehold.co/400x400/000000/white?text=Basic+Den'],
        grey: ['https://placehold.co/400x400/808080/white?text=Basic+Xam']
      }
    }
  ];

  constructor() { }

  // ==========================================
  // CÁC HÀM ĐỂ CÁC TRANG KHÁC "RÚT" DỮ LIỆU
  // ==========================================

  // 1. Hàm lấy toàn bộ danh sách (Dành cho trang Danh sách Sản phẩm /products)
  getAllProducts(): Product[] {
    return this.productList;
  }

  // 2. Hàm lấy 1 sản phẩm cụ thể theo mã ID (Dành cho trang Chi tiết /products/:id)
  getProductById(id: string): Product | undefined {
    return this.productList.find(product => product.id === id);
  }
}