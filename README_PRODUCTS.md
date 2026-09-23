# Hướng dẫn thêm sản phẩm tin dùng

Để thêm hoặc sửa sản phẩm hiển thị trên trang **Sản phẩm tin dùng**, bạn không cần phải sửa code HTML. Toàn bộ dữ liệu được quản lý tập trung tại một file duy nhất.

Bạn chỉ mất khoảng 2-3 phút để thêm một sản phẩm mới theo các bước sau:

### Bước 1: Chuẩn bị hình ảnh
1. Tìm hoặc chụp một bức ảnh vuông gọn gàng (định dạng `.jpg` hoặc `.png`).
2. Copy ảnh đó vào thư mục: `assets/images/dung/`
3. Lưu ý tên file, ví dụ: `sanpham1.jpg`.

### Bước 2: Sửa file dữ liệu
1. Mở file `assets/data/products.json` bằng bất kỳ Text Editor nào (Notepad, VSCode, hoặc sửa trực tiếp trên giao diện GitHub).
2. File này chứa một danh sách (dấu ngoặc vuông `[...]`), bên trong là các khối dữ liệu sản phẩm (được bao bởi ngoặc nhọn `{...}`).
3. Để thêm sản phẩm mới, bạn copy một khối `{...}` cũ, dán xuống dưới cùng (nhớ thêm dấu phẩy `,` ở khối liền trước), và sửa lại các thông tin:

```json
{
  "id": "prod_4",                     // ID không được trùng nhau
  "name": "Tên sản phẩm của bạn",      // Tên sản phẩm
  "category": "làm vườn",              // Tên danh mục (Bộ lọc tự động nhóm theo trường này)
  "description": "Mô tả ngắn gọn.",    // Mô tả hiển thị
  "image": "assets/images/dung/sanpham1.jpg", // Đường dẫn ảnh vừa thêm ở Bước 1
  "shopeeUrl": "https://shopee.vn/link-cua-ban", // Link Affiliate Shopee
  "note": "Ghi chú cá nhân (nếu có)",  // Có thể để trống ""
  "featured": false,                   // (Tùy chọn tương lai)
  "active": true                       // Để true để hiển thị, đổi thành false nếu muốn ẩn tạm thời
}
```

### Bước 3: Kiểm tra
Sau khi lưu file và đẩy (push) lên GitHub, dữ liệu trên trang web sẽ tự động được cập nhật. Bộ lọc (Filter) cũng sẽ tự động xuất hiện tên `category` mà bạn vừa thêm!

> **Lưu ý nhỏ:** Nếu bạn xem trang web ở máy tính bằng cách double-click vào file `sanpham.html`, có thể một số trình duyệt (như Chrome) sẽ chặn file `.json` vì lý do bảo mật (CORS). Để xem trước chính xác nhất, bạn nên dùng một Local Server (ví dụ tiện ích *Live Server* trong VSCode) hoặc xem trực tiếp trên link GitHub Pages sau khi đã push code.
