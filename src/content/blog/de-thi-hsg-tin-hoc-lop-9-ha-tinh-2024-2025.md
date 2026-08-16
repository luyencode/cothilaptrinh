---
title: "Đề thi HSG Tin học lớp 9 Hà Tĩnh 2024-2025: đề đầy đủ 4 bài, có contest chấm tự động và lời giải"
description: "Đề thi học sinh giỏi Tin học lớp 9 tỉnh Hà Tĩnh năm học 2024-2025 chép lại nguyên văn 4 bài FINDK, FISH, MPRI, SUBL kèm ví dụ, ràng buộc, hướng giải C++ và địa chỉ nộp bài chấm tự động miễn phí tại code.cothilaptrinh.vn."
date: 2026-08-16
tags: ["Đề thi HSG", "Tin học lớp 9", "HSG Tin học", "Luyện đề"]
author: "Đặng Kim Thi"
cover: "/assets/blog/de-thi-hsg-tin-hoc-lop-9-ha-tinh-2024-2025/cover.png"
---

Đề thi học sinh giỏi Tin học cấp tỉnh hiếm khi được phát hành kèm bộ test, nên phần lớn học sinh chỉ đọc đề rồi bỏ qua, không có cách nào kiểm chứng lời giải của mình. Bài viết chép lại nguyên văn bốn bài của đề Hà Tĩnh năm học 2024-2025 và đặt kèm địa chỉ nộp bài chấm tự động ngay dưới từng bài.

Nguồn đề: Kỳ thi chọn học sinh giỏi tỉnh lớp 9, môn Tin học, Sở Giáo dục và Đào tạo Hà Tĩnh, năm học 2024-2025. Đề gồm 4 bài, tổng 20 điểm, thời gian làm bài 120 phút, cho phép C++ hoặc Python. Bộ test trên hệ thống chấm được dựng đúng theo các nhóm ràng buộc ghi trong đề, nên điểm trên contest phản ánh đúng thang điểm từng phần của đề gốc.

> Một đề thi chỉ trọn vẹn khi có bộ test để nộp thử: đọc hiểu đề là một chuyện, lời giải sống sót qua bao nhiêu phần trăm số test là chuyện khác.

Địa chỉ nộp bài cho cả bốn bài (miễn phí, nộp xong có điểm ngay):

**https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/**

![Tổng quan đề thi HSG Tin học lớp 9 Hà Tĩnh 2024-2025: 4 bài, 20 điểm, 120 phút](/assets/blog/de-thi-hsg-tin-hoc-lop-9-ha-tinh-2024-2025/tong-quan-de.svg)

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

<div style="margin:18px 0 26px;border-radius:20px;padding:20px 26px;background:linear-gradient(135deg,#1f8b3f,#14672d);color:#eaf7ee;">
  <p style="margin:0 0 6px;font-weight:700;">Nộp bài FINDK, chấm điểm tự động:</p>
  <p style="margin:0;word-break:break-all;"><a href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="color:#ffffff;font-weight:700;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</a></p>
</div>

Hướng giải: tổng 1 + 2 + ... + k bằng k(k+1)/2, nên chỉ cần tìm k lớn nhất sao cho k(k+1)/2 <= n. Ước lượng k bằng căn bậc hai của 2n rồi chỉnh lại vài bước. Nhóm 20% điểm cuối kiểm tra kiểu dữ liệu chứ không kiểm tra thuật toán: với n cỡ 10^18, phép nhân k(k+1) phải tính bằng số 128 bit và không được tin kết quả căn của số thực.

```cpp
unsigned long long n;
cin >> n;
unsigned long long k = (unsigned long long)(sqrtl(2.0L * (long double)n));
while (k > 0 && (__int128)k * (k + 1) / 2 > (__int128)n) --k;
while ((__int128)(k + 1) * (k + 2) / 2 <= (__int128)n) ++k;
cout << k;
```

## Bài 2 FISH: Nuôi cá cảnh (6 điểm)

BigZero có một bể cá với đàn cá nhiều màu sắc. Thức ăn của cá được đựng trong các gói đóng sẵn. Mỗi ngày đàn cá ăn hết đúng 3 gói, giá bán thức ăn thường xuyên biến động. Cửa hàng cho biết trước giá bán trong n ngày lần lượt là a1, a2, ..., an, mỗi ngày được mua nhiều gói với giá bán của ngày đó, thức ăn thừa có thể được dùng cho các ngày tiếp theo.

**Yêu cầu:** cho số nguyên dương n và các số nguyên dương a1, a2, ..., an, trong đó ai là giá bán một gói thức ăn trong ngày thứ i (1 <= i <= n <= 10^6; ai <= 10^9). Hãy xác định số tiền tối thiểu để mua thức ăn cho đàn cá trong n ngày.

**Dữ liệu vào:** tệp văn bản FISH.INP gồm dòng thứ nhất chứa số nguyên dương n; dòng thứ hai chứa n số nguyên dương a1, a2, ..., an.

**Kết quả:** ghi ra tệp văn bản FISH.OUT một số nguyên duy nhất là số tiền tối thiểu.

**Ràng buộc:** 30% số test có dãy giá không giảm; 30% số test khác có dãy giá không tăng; 40% còn lại không có ràng buộc gì thêm.

| FISH.INP | FISH.OUT | Giải thích |
|---|---|---|
| 3<br>2 3 5 | 18 | Ngày 1 mua 9 gói giá 2: 9 x 2 = 18 |
| 3<br>5 3 2 | 30 | Mỗi ngày mua 3 gói: 3 x 5 + 3 x 3 + 3 x 2 = 30 |
| 3<br>5 2 3 | 27 | Ngày 1 mua 3 gói, ngày 2 mua 6 gói: 15 + 12 = 27 |

<div style="margin:18px 0 26px;border-radius:20px;padding:20px 26px;background:linear-gradient(135deg,#2e86c9,#1d5f96);color:#e8f3fb;">
  <p style="margin:0 0 6px;font-weight:700;">Nộp bài FISH, chấm điểm tự động:</p>
  <p style="margin:0;word-break:break-all;"><a href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="color:#ffffff;font-weight:700;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</a></p>
</div>

Hướng giải: vì thức ăn thừa dùng được cho ngày sau, ba gói của ngày i mua được ở bất kỳ ngày nào từ 1 tới i, và tối ưu là mua ở ngày rẻ nhất trong đoạn đó. Chỉ cần một biến giữ giá nhỏ nhất tính từ đầu dãy, cộng dồn qua một lượt duyệt O(n).

> Bài tham lam 6 điểm này ăn thua ở một câu trong đề: thức ăn thừa có thể được dùng cho các ngày tiếp theo. Đọc lướt câu đó là giải sai cả bài.

```cpp
long long nhoNhat = LLONG_MAX, tong = 0;
for (int i = 0; i < n; ++i) {
    long long a;
    cin >> a;
    nhoNhat = min(nhoNhat, a);   // giá rẻ nhất tính đến ngày i
    tong += nhoNhat;
}
cout << tong * 3;
```

## Bài 3 MPRI: Số nguyên tố (6 điểm)

Số nguyên tố là số tự nhiên lớn hơn 1 và chỉ có đúng hai ước là 1 và chính nó.

**Yêu cầu:** cho số tự nhiên n, hãy tìm số tự nhiên p thỏa mãn điều kiện: p là số nguyên tố nhỏ nhất và p >= n.

**Dữ liệu vào:** tệp văn bản MPRI.INP gồm dòng thứ nhất chứa số nguyên dương Q (Q <= 10^6) là số bộ test; Q dòng tiếp theo, mỗi dòng chứa một số tự nhiên n (n <= 10^9).

**Kết quả:** ghi ra tệp văn bản MPRI.OUT gồm Q dòng, mỗi dòng ghi một số nguyên tố tìm được tương ứng với dữ liệu vào.

**Ràng buộc:** 30% số test có Q = 1 và n <= 10^3; 40% số test khác có Q <= 10^2 và n <= 10^9; 30% còn lại có Q <= 10^6 và n <= 10^6.

| MPRI.INP | MPRI.OUT | Giải thích |
|---|---|---|
| 2<br>5<br>8 | 5<br>11 | Với n = 5 thì p = 5; với n = 8 thì p = 11 |

<div style="margin:18px 0 26px;border-radius:20px;padding:20px 26px;background:linear-gradient(135deg,#1f8b3f,#14672d);color:#eaf7ee;">
  <p style="margin:0 0 6px;font-weight:700;">Nộp bài MPRI, chấm điểm tự động:</p>
  <p style="margin:0;word-break:break-all;"><a href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="color:#ffffff;font-weight:700;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</a></p>
</div>

Hướng giải: các nhóm ràng buộc chia bài thành hai tình huống. Với n nhỏ, sàng Eratosthenes một lần rồi quét ngược để dựng bảng số nguyên tố kế tiếp, mỗi truy vấn còn một phép tra mảng. Với n lớn tới 10^9, dò từng số từ n trở lên và kiểm tra bằng Miller-Rabin với bộ cơ sở cố định; khoảng cách giữa hai số nguyên tố liên tiếp quanh 10^9 chỉ vài trăm nên phần dò rất nhẹ. Với 10^6 dòng kết quả, cần gom vào một chuỗi rồi in một lần, vì chi phí in từng dòng có thể vượt cả phần tính toán.

```cpp
// dựng bảng: quét ngược để biết số nguyên tố kế tiếp của mọi n nhỏ
int cuoi = 0;
for (int i = NHO; i >= 0; --i) {
    if (!hop[i]) cuoi = i;
    nextPrime[i] = cuoi;
}
// truy vấn: n nhỏ tra bảng, n lớn dò bằng Miller-Rabin
if (n <= NHO - 5) p = nextPrime[n];
else { p = n; while (!nguyenTo(p)) ++p; }
```

## Bài 4 SUBL: Dãy con (4 điểm)

Cho một dãy A gồm n số nguyên dương a1, a2, ..., an và một số nguyên dương m.

**Yêu cầu:** hãy tìm số nguyên dương L nhỏ nhất sao cho tất cả các dãy con gồm L phần tử liên tiếp của dãy A đều có tổng lớn hơn hoặc bằng m. Nếu không tìm được giá trị thỏa mãn thì ghi -1.

**Dữ liệu vào:** tệp văn bản SUBL.INP gồm dòng thứ nhất chứa hai số nguyên dương n và m (1 <= n <= 10^5; m <= 10^18); dòng tiếp theo chứa n số nguyên dương a1, a2, ..., an (ai <= 10^9).

**Kết quả:** ghi ra tệp văn bản SUBL.OUT một số nguyên dương L nhỏ nhất tìm được, hoặc -1.

**Ràng buộc:** 30% số test có dãy không giảm; 40% số test khác có n <= 10^3; 30% còn lại không có ràng buộc gì thêm.

| SUBL.INP | SUBL.OUT |
|---|---|
| 5 6<br>3 2 1 4 5 | 3 |
| 4 16<br>7 1 2 5 | -1 |

<div style="margin:18px 0 26px;border-radius:20px;padding:20px 26px;background:linear-gradient(135deg,#2e86c9,#1d5f96);color:#e8f3fb;">
  <p style="margin:0 0 6px;font-weight:700;">Nộp bài SUBL, chấm điểm tự động:</p>
  <p style="margin:0;word-break:break-all;"><a href="https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/" style="color:#ffffff;font-weight:700;">https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/</a></p>
</div>

Hướng giải: điều kiện đặt lên tất cả các đoạn, tức là chỉ cần đoạn có tổng nhỏ nhất đạt m. Vì mọi phần tử đều dương, tổng nhỏ nhất của đoạn độ dài L không giảm khi L tăng, do đó nhị phân được trên L; mỗi lần kiểm tra dùng cửa sổ trượt một lượt O(n). Chặn trước trường hợp tổng cả dãy nhỏ hơn m để in -1.

> Chữ quan trọng nhất của đề là tất cả các dãy con. Hiểu nhầm thành tồn tại một dãy con là một bài toán hoàn toàn khác, và là lỗi mất điểm phổ biến nhất ở bài này.

```cpp
bool duoc(int L) {                 // mọi đoạn độ dài L đều có tổng >= m ?
    long long s = 0;
    for (int i = 0; i < L; ++i) s += a[i];
    if (s < m) return false;
    for (int i = L; i < n; ++i) {
        s += a[i] - a[i - L];      // trượt cửa sổ sang phải một bước
        if (s < m) return false;
    }
    return true;
}
```

## Cách dùng đề này để tự luyện

Cách luyện đúng nghĩa là làm như đi thi: đặt đồng hồ 120 phút, mở contest, làm cả bốn bài rồi mới đối chiếu hướng giải. Sau buổi làm, con số đáng xem không phải tổng điểm mà là bài nào rơi điểm ở nhóm test nào: trượt nhóm 20% cuối của FINDK là hổng kiểu dữ liệu, trượt nhóm cuối của MPRI là hổng tốc độ đọc ghi. Học sinh cần lộ trình ôn bài bản theo dạng bài có thể tham khảo [khóa học luyện thi HSG Tin học và chuyên Tin](/khoa-hoc-hsg-chuyen-tin) hoặc [lộ trình học lập trình cho học sinh](/lo-trinh).

Địa chỉ nộp bài, nhắc lại một lần nữa để không phải cuộn ngược:

**https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/**

## Câu hỏi thường gặp về đề thi HSG Tin học lớp 9

**Đề thi HSG Tin học lớp 9 gồm những dạng bài nào?**
Phổ biến nhất là số học, xử lý dãy, xử lý xâu và tham lam, đúng như cấu trúc đề Hà Tĩnh ở trên. Các tỉnh ra đề khó hơn sẽ thêm nhị phân trên đáp án và quy hoạch động cơ bản.

**Làm đề HSG Tin học ở đâu có chấm tự động miễn phí?**
Cả bốn bài của đề này nằm trong contest tại https://code.cothilaptrinh.vn/contest/hsg_tinh_ha_tinh_2024_2025/ với bộ test chia đúng theo nhóm ràng buộc của đề. Kho đề trên hệ thống còn nhiều contest HSG lớp 9 của các tỉnh khác và được bổ sung hàng tuần.

**Thi HSG Tin học lớp 9 nên dùng C++ hay Python?**
Đề Hà Tĩnh cho phép cả hai. C++ an toàn hơn ở bài nặng dữ liệu vào ra như MPRI; Python gọn hơn ở bài công thức như FINDK. Nếu còn trên một năm để ôn, học C++ từ đầu trong [các khóa học lập trình cho học sinh](/khoa-hoc) là lựa chọn hợp lý.

## Kết luận

**Giá trị của một đề có contest nằm ở chỗ nó biến việc đọc đề thành một buổi thi thử trọn vẹn: có đề, có đồng hồ, có điểm số theo đúng thang điểm gốc.** Đề Hà Tĩnh 2024-2025 gọn về phát biểu nhưng mỗi bài giấu đúng một điểm ăn thua đáng học, từ kiểu dữ liệu 64 bit tới cách đọc một chữ "tất cả" trong đề.

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
