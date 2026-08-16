---
title: "Đề thi HSG Tin học lớp 9 Hà Tĩnh 2024-2025: đề đầy đủ 4 bài, có contest chấm tự động"
description: "Đề thi học sinh giỏi Tin học lớp 9 tỉnh Hà Tĩnh năm học 2024-2025 chép lại nguyên văn 4 bài FINDK, FISH, MPRI, SUBL kèm ví dụ, ràng buộc, nguồn ra đề và địa chỉ nộp bài chấm tự động miễn phí tại code.cothilaptrinh.vn."
date: 2026-08-16
tags: ["Đề thi HSG Tin học lớp 9", "HSG Tin học", "Tin học lớp 9", "Hà Tĩnh", "Luyện đề"]
author: "Đặng Kim Thi"
cover: "/assets/blog/de-thi-hsg-tin-hoc-lop-9-ha-tinh-2024-2025/cover.png"
---

Đề thi học sinh giỏi Tin học cấp tỉnh hiếm khi được phát hành kèm bộ test, nên học sinh tự ôn thường chỉ dừng ở mức đọc đề mà không kiểm chứng được lời giải của mình. Bài viết này chép lại nguyên văn bốn bài của đề Hà Tĩnh năm học 2024-2025, ghi rõ nguồn, và đặt địa chỉ nộp bài chấm tự động ngay dưới từng bài để bạn đọc luyện tập trong điều kiện gần với phòng thi nhất.

Nguồn đề: Kỳ thi chọn học sinh giỏi tỉnh lớp 9, môn Tin học, Sở Giáo dục và Đào tạo Hà Tĩnh, năm học 2024-2025. Đề gồm 4 bài, tổng 20 điểm, thời gian làm bài 120 phút, cho phép C++ hoặc Python. Bộ test trên hệ thống chấm được xây dựng theo đúng các nhóm ràng buộc ghi trong đề, nên kết quả trên contest phản ánh đúng thang điểm từng phần của đề gốc.

> Đọc hiểu đề mới là một nửa của quá trình luyện tập. Nửa còn lại là kiểm chứng lời giải trên bộ test đầy đủ, nơi từng nhóm ràng buộc của đề được chấm điểm riêng.

Địa chỉ nộp bài cho cả bốn bài (miễn phí, có kết quả ngay sau khi nộp):

**https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/**

![Tổng quan đề thi HSG Tin học lớp 9 Hà Tĩnh 2024-2025: 4 bài FINDK, FISH, MPRI, SUBL, tổng 20 điểm, 120 phút](/assets/blog/de-thi-hsg-tin-hoc-lop-9-ha-tinh-2024-2025/tong-quan-de.svg)

## Bài 1 FINDK: Số nguyên dương k (4 điểm)

Cho một số nguyên dương n (n <= 10^18).

**Yêu cầu:** tìm số nguyên dương k lớn nhất thỏa mãn điều kiện: 1 + 2 + 3 + ... + k <= n.

**Dữ liệu vào:** tệp văn bản FINDK.INP gồm một dòng duy nhất chứa số nguyên dương n.

**Kết quả:** ghi ra tệp văn bản FINDK.OUT một số nguyên dương k thỏa mãn yêu cầu bài toán.

**Ràng buộc:** 80% số test ứng với 80% số điểm có n <= 10^6; 20% số test còn lại có 10^6 < n <= 10^18.

| FINDK.INP | FINDK.OUT | Giải thích |
|---|---|---|
| 5 | 2 | k = 2 là lớn nhất thỏa mãn 1 + 2 <= 5 |
| 6 | 3 | k = 3 là lớn nhất thỏa mãn 1 + 2 + 3 <= 6 |

<div style="margin:20px 0 30px;border-radius:20px;overflow:hidden;border:1px solid #dcebe0;box-shadow:0 6px 18px rgba(31,139,63,.10);">
  <div style="padding:14px 24px;background:linear-gradient(135deg,#1f8b3f,#14672d);">
    <p style="margin:0;color:#ffffff;font-weight:700;letter-spacing:.3px;">NỘP BÀI FINDK - CHẤM TỰ ĐỘNG, CÓ ĐIỂM NGAY</p>
  </div>
  <div style="padding:16px 24px;background:#f6fbf7;display:flex;flex-wrap:wrap;align-items:center;gap:14px;">
    <p style="margin:0;flex:1 1 300px;word-break:break-all;color:#1E3A63;font-weight:600;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</p>
    <a class="btn btn-gold" href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="text-decoration:none;white-space:nowrap;">Vào contest nộp bài</a>
  </div>
</div>

## Bài 2 FISH: Nuôi cá cảnh (6 điểm)

BigZero có một bể cá với đàn cá nhiều màu sắc. Thức ăn của cá được đựng trong các gói đóng sẵn. Mỗi ngày đàn cá ăn hết đúng 3 gói, giá bán thức ăn thường xuyên biến động. Cửa hàng cho biết trước giá bán trong n ngày lần lượt là a1, a2, ..., an, mỗi ngày được mua nhiều gói với giá bán của ngày đó, thức ăn thừa có thể được dùng cho các ngày tiếp theo. BigZero đang lên kế hoạch để mua thức ăn cho đàn cá trong n ngày sao cho tiết kiệm nhất.

**Yêu cầu:** cho số nguyên dương n và các số nguyên dương a1, a2, ..., an, trong đó ai là giá bán một gói thức ăn trong ngày thứ i (1 <= i <= n <= 10^6; ai <= 10^9). Hãy xác định số tiền tối thiểu để mua thức ăn cho đàn cá trong n ngày.

**Dữ liệu vào:** tệp văn bản FISH.INP gồm dòng thứ nhất chứa số nguyên dương n; dòng thứ hai chứa n số nguyên dương a1, a2, ..., an.

**Kết quả:** ghi ra tệp văn bản FISH.OUT một số nguyên duy nhất là số tiền tối thiểu để mua thức ăn cho đàn cá trong n ngày.

**Ràng buộc:** 30% số test có dãy giá không giảm; 30% số test khác có dãy giá không tăng; 40% còn lại không có ràng buộc gì thêm.

| FISH.INP | FISH.OUT | Giải thích |
|---|---|---|
| 3<br>2 3 5 | 18 | Ngày 1 mua 9 gói giá 2: 9 x 2 = 18 |
| 3<br>5 3 2 | 30 | Mỗi ngày mua 3 gói: 3 x 5 + 3 x 3 + 3 x 2 = 30 |
| 3<br>5 2 3 | 27 | Ngày 1 mua 3 gói, ngày 2 mua 6 gói: 15 + 12 = 27 |

<div style="margin:20px 0 30px;border-radius:20px;overflow:hidden;border:1px solid #d8e8f5;box-shadow:0 6px 18px rgba(46,134,201,.10);">
  <div style="padding:14px 24px;background:linear-gradient(135deg,#2e86c9,#1d5f96);">
    <p style="margin:0;color:#ffffff;font-weight:700;letter-spacing:.3px;">NỘP BÀI FISH - CHẤM TỰ ĐỘNG, CÓ ĐIỂM NGAY</p>
  </div>
  <div style="padding:16px 24px;background:#f5faff;display:flex;flex-wrap:wrap;align-items:center;gap:14px;">
    <p style="margin:0;flex:1 1 300px;word-break:break-all;color:#1E3A63;font-weight:600;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</p>
    <a class="btn btn-gold" href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="text-decoration:none;white-space:nowrap;">Vào contest nộp bài</a>
  </div>
</div>

## Bài 3 MPRI: Số nguyên tố (6 điểm)

Số nguyên tố là số tự nhiên lớn hơn 1 và chỉ có đúng hai ước là 1 và chính nó. Ví dụ các số tự nhiên 2, 3, 5, 7, 11, 13, 17, 19, 23, ... là các số nguyên tố.

**Yêu cầu:** cho số tự nhiên n, hãy tìm số tự nhiên p thỏa mãn điều kiện: p là số nguyên tố nhỏ nhất và p >= n.

**Dữ liệu vào:** tệp văn bản MPRI.INP gồm dòng thứ nhất chứa số nguyên dương Q (Q <= 10^6) là số bộ test; Q dòng tiếp theo, mỗi dòng chứa một số tự nhiên n (n <= 10^9).

**Kết quả:** ghi ra tệp văn bản MPRI.OUT gồm Q dòng, mỗi dòng ghi một số nguyên tố tìm được tương ứng với dữ liệu vào.

**Ràng buộc:** 30% số test có Q = 1 và n <= 10^3; 40% số test khác có Q <= 10^2 và n <= 10^9; 30% còn lại có Q <= 10^6 và n <= 10^6.

| MPRI.INP | MPRI.OUT | Giải thích |
|---|---|---|
| 2<br>5<br>8 | 5<br>11 | Với n = 5 thì p = 5; với n = 8 thì p = 11 |

<div style="margin:20px 0 30px;border-radius:20px;overflow:hidden;border:1px solid #dcebe0;box-shadow:0 6px 18px rgba(31,139,63,.10);">
  <div style="padding:14px 24px;background:linear-gradient(135deg,#1f8b3f,#14672d);">
    <p style="margin:0;color:#ffffff;font-weight:700;letter-spacing:.3px;">NỘP BÀI MPRI - CHẤM TỰ ĐỘNG, CÓ ĐIỂM NGAY</p>
  </div>
  <div style="padding:16px 24px;background:#f6fbf7;display:flex;flex-wrap:wrap;align-items:center;gap:14px;">
    <p style="margin:0;flex:1 1 300px;word-break:break-all;color:#1E3A63;font-weight:600;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</p>
    <a class="btn btn-gold" href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="text-decoration:none;white-space:nowrap;">Vào contest nộp bài</a>
  </div>
</div>

## Bài 4 SUBL: Dãy con (4 điểm)

Cho một dãy A gồm n số nguyên dương a1, a2, ..., an và một số nguyên dương m.

**Yêu cầu:** hãy tìm số nguyên dương L nhỏ nhất sao cho tất cả các dãy con gồm L phần tử liên tiếp của dãy A đều có tổng lớn hơn hoặc bằng m. Nếu không tìm được giá trị thỏa mãn thì ghi -1.

**Dữ liệu vào:** tệp văn bản SUBL.INP gồm dòng thứ nhất chứa hai số nguyên dương n và m (1 <= n <= 10^5; m <= 10^18); dòng tiếp theo chứa n số nguyên dương a1, a2, ..., an (ai <= 10^9).

**Kết quả:** ghi ra tệp văn bản SUBL.OUT một số nguyên dương L nhỏ nhất tìm được thỏa mãn yêu cầu bài toán, hoặc -1.

**Ràng buộc:** 30% số test có dãy không giảm; 40% số test khác có n <= 10^3; 30% còn lại không có ràng buộc gì thêm.

| SUBL.INP | SUBL.OUT |
|---|---|
| 5 6<br>3 2 1 4 5 | 3 |
| 4 16<br>7 1 2 5 | -1 |

<div style="margin:20px 0 30px;border-radius:20px;overflow:hidden;border:1px solid #d8e8f5;box-shadow:0 6px 18px rgba(46,134,201,.10);">
  <div style="padding:14px 24px;background:linear-gradient(135deg,#2e86c9,#1d5f96);">
    <p style="margin:0;color:#ffffff;font-weight:700;letter-spacing:.3px;">NỘP BÀI SUBL - CHẤM TỰ ĐỘNG, CÓ ĐIỂM NGAY</p>
  </div>
  <div style="padding:16px 24px;background:#f5faff;display:flex;flex-wrap:wrap;align-items:center;gap:14px;">
    <p style="margin:0;flex:1 1 300px;word-break:break-all;color:#1E3A63;font-weight:600;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</p>
    <a class="btn btn-gold" href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="text-decoration:none;white-space:nowrap;">Vào contest nộp bài</a>
  </div>
</div>

## Hướng dẫn giải và phiếu chữa đề

Bài viết này giữ đúng vai trò lưu trữ đề: toàn bộ phần phân tích thuật toán, lời giải mẫu cùng các lỗi thường gặp của từng bài được biên soạn riêng trong [bài hướng dẫn giải đề HSG Tin học lớp 9 Hà Tĩnh 2024-2025](/blog/huong-dan-giai-de-thi-hsg-tin-hoc-lop-9-ha-tinh-2024-2025), để bạn đọc không vô tình đọc trước lời giải khi chưa tự làm:

**cothilaptrinh.vn/blog/huong-dan-giai-de-thi-hsg-tin-hoc-lop-9-ha-tinh-2024-2025**

Phiếu chữa đề bản PDF được gửi qua nhóm Zalo Tài liệu và Đề thi Tin học:

**https://zalo.me/g/bv7ry9tw8luzrh1bsqha**

## Cách dùng đề này để tự luyện

Phương pháp được khuyến nghị là làm bài trong điều kiện sát với kỳ thi: đặt đồng hồ 120 phút, hoàn thành cả bốn bài trên contest, sau đó mới đối chiếu với phiếu chữa đề. Sau buổi làm bài, thông tin đáng phân tích không phải tổng điểm mà là phân bố điểm theo nhóm test của từng bài, vì mỗi nhóm ràng buộc kiểm tra một năng lực riêng. Học sinh cần lộ trình ôn tập có hệ thống theo dạng bài có thể tham khảo [khóa học luyện thi HSG Tin học và chuyên Tin](/khoa-hoc-hsg-chuyen-tin) hoặc [lộ trình học lập trình cho học sinh](/lo-trinh).

> Một đề được làm nghiêm túc trong 120 phút rồi chữa kỹ mang lại nhiều thông tin về năng lực hiện tại hơn nhiều đề làm nhanh chỉ để xem đáp án.

Địa chỉ nộp bài, nhắc lại để bạn đọc không phải cuộn ngược:

**https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/**

## Câu hỏi thường gặp về đề thi HSG Tin học lớp 9

**Đề thi HSG Tin học lớp 9 gồm những dạng bài nào?**
Các dạng xuất hiện thường xuyên nhất là số học, xử lý dãy số, xử lý xâu và bài toán tối ưu đơn giản, đúng như cấu trúc đề Hà Tĩnh ở trên. Đề của các tỉnh có độ khó cao hơn bổ sung thêm tìm kiếm nhị phân và quy hoạch động cơ bản.

**Làm đề HSG Tin học lớp 9 ở đâu có chấm tự động miễn phí?**
Cả bốn bài của đề này nằm trong contest tại https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/ với bộ test chia theo đúng nhóm ràng buộc của đề. Kho đề trên hệ thống còn nhiều contest HSG lớp 9 của các tỉnh khác và được bổ sung hàng tuần.

**Thi HSG Tin học lớp 9 nên dùng C++ hay Python?**
Đề Hà Tĩnh cho phép cả hai ngôn ngữ. C++ có lợi thế về tốc độ ở các bài nhiều dữ liệu vào ra; Python gọn hơn ở các bài thiên về công thức. Học sinh còn trên một năm chuẩn bị nên học C++ có hệ thống trong [các khóa học lập trình cho học sinh](/khoa-hoc).

## Kết luận

**Giá trị của một đề thi đi kèm contest nằm ở chỗ nó biến việc đọc đề thành một buổi thi thử trọn vẹn: có đề nguyên văn, có giới hạn thời gian, và có điểm số theo đúng thang điểm gốc.** Đề Hà Tĩnh 2024-2025 có phát biểu ngắn gọn nhưng độ phân hóa tốt: mỗi bài đặt ra một yêu cầu riêng về độ chính xác, từ việc lựa chọn kiểu dữ liệu phù hợp với giới hạn tới việc đọc trọn vẹn các điều kiện của đề.

Đề chỉ mang tính chất tham khảo, được sưu tầm và soạn lại từ Kỳ thi chọn học sinh giỏi tỉnh lớp 9, Sở Giáo dục và Đào tạo Hà Tĩnh, năm học 2024-2025. Nếu có nội dung cần chỉnh sửa hoặc gỡ bỏ, vui lòng liên hệ Zalo 0985 188 655.

<div style="margin-top:36px;border-radius:26px;padding:38px clamp(22px,5vw,48px);color:#fff;background:radial-gradient(circle at 88% -30%,rgba(242,193,61,.38),transparent 42%),linear-gradient(135deg,#1E3A63,#13294a);">
  <p style="margin:0;font-size:.82rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F2C13D;">Luyện đề cùng Cô Thi Lập Trình</p>
  <p style="margin:10px 0 6px;font-size:1.45rem;font-weight:800;line-height:1.3;color:#fff;">Làm thử đề Hà Tĩnh ngay hôm nay, chấm điểm tự động miễn phí</p>
  <p style="margin:0 0 22px;color:#dbe7f3;">Kho đề HSG và chuyên Tin được bổ sung hàng tuần, mỗi đề đều có contest và phiếu chữa đề chi tiết.</p>
  <p style="display:flex;flex-wrap:wrap;gap:12px;margin:0 0 18px;">
    <a class="btn btn-gold" href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="text-decoration:none;">Vào contest đề Hà Tĩnh</a>
    <a class="btn btn-light" href="/khoa-hoc-hsg-chuyen-tin" style="text-decoration:none;">Khóa luyện thi HSG và chuyên Tin</a>
    <a class="btn" href="https://zalo.me/0985188655" style="text-decoration:none;background:#1f8b3f;color:#fff;box-shadow:0 10px 24px rgba(31,139,63,.35);">Tư vấn Zalo: 0985 188 655</a>
  </p>
  <p style="margin:0;font-size:.92rem;color:#b7c6dd;">Vào nhóm Zalo
    <a href="https://zalo.me/g/bv7ry9tw8luzrh1bsqha" style="color:#fff;">Tài liệu và Đề thi Tin học</a>
    để nhận đề mới và phiếu chữa đề hàng tuần.
  </p>
</div>
