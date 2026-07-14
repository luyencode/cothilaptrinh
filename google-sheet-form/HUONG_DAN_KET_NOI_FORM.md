# Kết nối form "Liên hệ" với Google Sheet

Form trên trang `lien-he.html` sẽ gửi thẳng dữ liệu vào một Google Sheet của cô.
Làm 1 lần duy nhất, khoảng 5 phút.

## Bước 1 — Tạo Google Sheet
- Vào **https://sheets.new** (đăng nhập tài khoản Google của cô).
- Đặt tên, ví dụ: *"Liên hệ - Cô Thi Lập Trình"*.

## Bước 2 — Dán mã Apps Script
- Trong Sheet, mở menu **Extensions (Tiện ích mở rộng) → Apps Script**.
- Xóa hết code mẫu, mở file **Code.gs** (nằm cùng thư mục này), copy toàn bộ và dán vào.
- Bấm **Save** (biểu tượng đĩa mềm).

## Bước 3 — Deploy thành Web App
- Bấm **Deploy (Triển khai) → New deployment (Bản triển khai mới)**.
- Ở "Select type" chọn **Web app**.
- **Execute as** (Chạy với tư cách): **Me**.
- **Who has access** (Ai có quyền truy cập): **Anyone**.
- Bấm **Deploy**, rồi **Authorize access** — chọn tài khoản. Nếu hiện cảnh báo, bấm
  **Advanced → Go to ... (unsafe) → Allow**. (Đây là script của chính cô nên an toàn.)

## Bước 4 — Copy đường link Web App
- Sau khi deploy, Google hiện một link dạng:
  `https://script.google.com/macros/s/AKfyc.../exec`
- Copy link đó.

## Bước 5 — Dán link vào trang
**Cách dễ nhất:** gửi link đó cho tôi, tôi dán vào giúp và tạo lại trang.

**Hoặc tự làm:**
- Mở file `lien-he.html` bằng trình soạn thảo văn bản.
- Tìm dòng:  `var EP="";`
- Dán link vào giữa hai dấu ngoặc kép:
  `var EP="https://script.google.com/macros/s/.../exec";`
- Lưu lại.

## Bước 6 — Thử
- Mở `lien-he.html`, điền form, bấm **Gửi lời nhắn**.
- Mở lại Google Sheet → sẽ thấy một dòng mới ở tab **LienHe**.

---

Mỗi lần có người gửi, Sheet tự thêm một dòng gồm: **Thời gian, Họ tên, SĐT/Zalo,
Quan tâm khóa, Lời nhắn, Trang**.

Muốn **nhận email** mỗi khi có người gửi: trong `Code.gs` có sẵn đoạn `notify(...)`
(đang để ghi chú) — báo tôi để bật giúp và điền email của cô.
