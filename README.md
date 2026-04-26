# 📱 TechShop - Angular E-commerce Application

Dự án xây dựng giao diện ứng dụng bán hàng điện thoại di động (Smartphone) sử dụng framework **Angular 21**. Dự án tập trung vào việc xử lý logic giỏ hàng phức tạp, hệ thống mã giảm giá thông minh và quản lý form dữ liệu người dùng.

## ✨ Tính năng nổi bật

### 🛒 Quản lý Giỏ hàng (Shopping Cart)
* Hiển thị danh sách sản phẩm với hình ảnh tự động thay đổi theo màu sắc 
* Thêm, xóa, tăng/giảm số lượng sản phẩm trong giỏ hàng.
* Lựa chọn mua từng sản phẩm hoặc chọn tất cả (Select All).
* Tự động tính phí vận chuyển (Miễn phí ship cho đơn trên 500k).
* Lưu trữ dữ liệu giỏ hàng cục bộ (Local Storage).

### 🎟️ Hệ thống Voucher 
Đây là tính năng cốt lõi với logic xử lý chặt chẽ:
* Hỗ trợ **chọn nhiều mã giảm giá cùng lúc** (Tối đa 2 mã hợp lệ).
* **Phân loại theo thương hiệu:** Tính toán tiền giảm giá dựa trên tổng tiền của từng hãng riêng biệt thay vì tổng hóa đơn.
    * `APPLE10`: Giảm 10% cho các sản phẩm Apple.
    * `SAMSUNG1M`: Giảm tối đa 1.000.000đ cho sản phẩm Samsung.
    * `XIAOMI20`: Giảm 20% cho sản phẩm Xiaomi (Yêu cầu tổng tiền đồ Xiaomi > 20.000.000đ).
* Giao diện Dropdown Custom với Checkbox trực quan và tính năng "Hủy áp dụng mã" nhanh chóng.
* Tự động chặn và hiển thị thông báo lỗi chi tiết nếu mã không đủ điều kiện.

### 📝 Form & Validation (Reactive Forms)
* Sử dụng Reactive Forms để quản lý form đăng ký người dùng mới.
* Validate dữ liệu nghiêm ngặt tự custom (Custom Validators):
    * Username không chứa ký tự đặc biệt, bắt đầu bằng chữ.
    * Họ tên đầy đủ (Ít nhất 2 từ).
* **Xử lý File Ảnh:** Kiểm tra kích thước (< 8MB) và độ phân giải hình ảnh (> 400x400) trước khi cho phép upload.

### 🌐 Tích hợp API
* Kết nối với RESTful API (GoRest) thông qua `HttpClientModule`.
* Hiển thị danh sách người dùng và bài viết.

## 🛠️ Công nghệ sử dụng
* **Core:** Angular 21, TypeScript, HTML5, CSS3.
* **Giao diện:** Bootstrap 5 (Responsive).
* **Thư viện bổ trợ:** `ngx-toastr` (Hiển thị thông báo dạng Pop-up), `rxjs`.
