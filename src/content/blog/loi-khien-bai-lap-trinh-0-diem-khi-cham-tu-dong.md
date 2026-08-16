---
title: "Top 10 lỗi khiến bài lập trình bị 0 điểm khi chấm tự động (dù thuật toán đúng)"
description: "Vì sao bài chạy đúng trên máy mình nhưng nộp lên máy chấm tự động vẫn 0 điểm? 10 lỗi hay gặp nhất khi luyện thi HSG Tin học và chuyên Tin: đọc dữ liệu sai, in thừa chữ, tràn số, quá thời gian, quên trường hợp biên, kèm cách kiểm tra trong 60 giây."
date: 2026-08-20
tags: ["HSG Tin học", "Chuyên Tin", "C/C++", "Luyện đề"]
author: "Đặng Kim Thi"
cover: "/assets/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong/cover.png"
---

Học sinh luyện thi Tin học gần như ai cũng trải qua cảnh này: bài chạy đúng trên máy mình, thử lại ví dụ trong đề cũng ra đúng kết quả, nộp lên hệ thống chấm tự động thì nhận về dòng chữ sai ở test 1. Bài viết này liệt kê 10 lỗi khiến bài mất điểm oan hay gặp nhất, kèm cách phát hiện từng lỗi trước khi bấm nộp.

Điểm chung của cả 10 lỗi: không có lỗi nào là lỗi thuật toán. Chúng nằm ở đoạn đọc dữ liệu vào, đoạn in kết quả ra, và ở những trường hợp dữ liệu mà đề có nói nhưng người làm bài đọc lướt qua. Đây cũng là lý do các lỗi này dai dẳng: học sinh càng giỏi thuật toán càng ít nghi ngờ chúng.

> Máy chấm không hiểu ý người viết, nó chỉ đọc đúng những gì chương trình in ra. Một bài đúng hoàn toàn về tư duy mà in thừa một chữ vẫn bị tính là sai.

![Sơ đồ hành trình một bài nộp trên hệ thống chấm tự động: đọc dữ liệu, tính toán, in kết quả, chạy qua bộ test rồi ra điểm](/assets/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong/tong-quan.svg)

## Tóm tắt nhanh: 10 lỗi khiến bài bị 0 điểm khi chấm tự động

Dành cho ai cần soát bài ngay, đây là danh sách rút gọn (phân tích chi tiết ở các phần dưới):

1. **Dùng cin đọc xâu có dấu cách**: chỉ nhận được từ đầu tiên
2. **Đọc số rồi getline ngay sau**: xâu đọc được rỗng
3. **Không xử lý khoảng trắng thừa**: đếm từ bị lệch
4. **In thêm chữ mô tả**: đáp án chỉ cần con số
5. **In câu nhắc trước khi đọc dữ liệu**: máy chấm không phải người dùng
6. **Sai số chữ số thập phân**: đề yêu cầu hai chữ số mà in ra một
7. **Tràn số do dùng int**: kết quả thành số âm
8. **Nhầm phép chia số nguyên với chia thực**: mất phần lẻ
9. **Quá thời gian dù kết quả đúng**: chọn cách giải chậm hơn giới hạn
10. **Quên trường hợp biên**: dữ liệu rỗng, một phần tử, hoặc không có kết quả nào

## Nhóm lỗi đọc dữ liệu vào: ba chỗ hỏng ngay từ dòng đầu

![Minh họa lỗi đọc dữ liệu vào trong C++: cin chỉ nhận một từ trong khi getline nhận trọn cả dòng](/assets/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong/doc-du-lieu.svg)

Ba lỗi đầu tiên đều xuất phát từ việc chương trình không nhận được đúng thứ mà đề đưa vào. Bài xử lý sai một dữ liệu sai thì mọi bước sau đó dù đúng vẫn vô nghĩa.

Lỗi phổ biến nhất là dùng lệnh đọc thông thường cho một xâu có dấu cách. Đề đưa vào dòng chữ Ha Noi mua thu, chương trình chỉ nhận được chữ Ha, phần còn lại nằm nguyên trong bộ đệm. Chạy thử với xâu một từ thì đúng, nộp lên là sai sạch. Cách xử lý trong C++ là dùng getline, trong Python là hàm đọc trọn dòng.

Lỗi thứ hai tinh vi hơn: đề cho dòng đầu là một số, dòng sau là xâu. Chương trình đọc số xong gọi getline ngay, kết quả nhận về là xâu rỗng, vì dấu xuống dòng của dòng trước vẫn còn nằm lại và getline vớ đúng nó rồi dừng. Cách xử lý là bỏ phần còn lại của dòng trước khi getline.

Lỗi thứ ba xảy ra khi file test có dấu cách thừa ở cuối dòng hoặc hai dấu cách liền nhau. Đếm số từ bằng cách đếm dấu cách rồi cộng một sẽ lệch ngay. Cách đúng là duyệt xâu và đếm số lần chuyển từ trạng thái đang ở khoảng trắng sang trạng thái đang ở trong một từ.

> Trước khi xử lý bất cứ điều gì, hãy in ngay ra màn hình thứ chương trình vừa đọc được. Mất mười giây, nhưng loại được cả ba lỗi tốn nhiều điểm nhất.

Việc cần làm ngay: mở lại một bài từng bị sai không rõ lý do, thêm một dòng in thử dữ liệu vừa đọc, rồi chạy lại với đúng ví dụ trong đề. Rất nhiều bài lộ lỗi ngay ở bước này.

## Nhóm lỗi in kết quả ra: máy chấm so từng ký tự

![So sánh những gì bài in ra và những gì đáp án cần: bài in thừa chữ mô tả trong khi đáp án chỉ cần con số](/assets/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong/in-ket-qua.svg)

Hệ thống chấm tự động đối chiếu kết quả bài in ra với đáp án theo từng ký tự. Không có khái niệm gần đúng, không có ai đọc để hiểu ý.

Ba lỗi ở nhóm này đều đến từ thói quen viết chương trình cho người dùng thay vì cho máy chấm. In ra dòng Ket qua la 42 trong khi đáp án chỉ là số 42 là sai. In câu nhắc Nhap n truoc khi đọc dữ liệu cũng sai, vì câu nhắc đó nằm luôn trong phần kết quả. Đề yêu cầu in số thực với hai chữ số sau dấu phẩy mà chương trình in theo định dạng mặc định, ra 3.5 thay vì 3.50, vẫn sai.

Có một biến thể hay gặp nữa: dùng phép chia số nguyên ở chỗ cần chia số thực. Trong C++, hai số nguyên chia cho nhau cho ra số nguyên, phần lẻ bị cắt mất. Bài tính điểm trung bình ra 8 thay vì 8.5 là do đúng chỗ này.

> Đề bảo in cái gì thì in đúng cái đó, không thêm một chữ nào. Mọi dòng chữ giải thích thêm đều là dòng chữ làm sai bài.

Việc cần làm ngay: sau khi viết xong, đọc lại riêng phần Kết quả ra của đề một lần nữa, đối chiếu từng dòng với những gì chương trình in. Thói quen một phút này cứu được rất nhiều điểm trong phòng thi.

## Nhóm lỗi kiểu số và thời gian chạy: đúng nhưng vẫn không đạt

![Minh họa lỗi tràn số khi dùng int và lỗi quá thời gian khi dữ liệu lớn dần](/assets/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong/tran-so-va-thoi-gian.svg)

Hai lỗi ở nhóm này khiến bài thất bại dù logic hoàn toàn chính xác, và chúng chỉ lộ ra ở những test có dữ liệu lớn, tức là những test nằm cuối và thường chiếm nhiều điểm nhất.

Tràn số xảy ra khi giá trị vượt quá sức chứa của kiểu dữ liệu. Kiểu int trong C++ chứa được tới khoảng hai tỷ; một phép nhân hai số lớn hoặc một phép cộng dồn qua nhiều bước là vượt ngay, và kết quả biến thành số âm một cách khó hiểu. Nguyên tắc đơn giản: thấy đề cho giá trị lớn và bài có phép nhân hoặc cộng dồn thì dùng long long.

Quá thời gian là chuyện khác. Bài in ra đúng nhưng chạy chậm hơn giới hạn cũng không được tính điểm. Trước khi viết code, hãy nhân thử: dữ liệu cỡ một trăm nghìn mà cách làm dùng hai vòng lặp lồng nhau là mười tỷ phép tính, không hệ thống nào kịp. Ước lượng này chính là nội dung của khái niệm độ phức tạp, phần kiến thức nền cho mọi kỳ thi thuật toán và là trọng tâm của [khóa học cấu trúc dữ liệu và giải thuật](/khoa-hoc-ctdl-giai-thuat).

> Ước lượng số phép tính trước khi viết dòng code đầu tiên, chứ không phải sau khi nộp và nhận về dòng chữ quá thời gian.

Việc cần làm ngay: với mỗi bài, đọc ràng buộc ở cuối đề trước khi nghĩ cách giải. Con số giới hạn dữ liệu chính là gợi ý cho biết đề mong đợi cách giải nhanh cỡ nào.

## Nhóm lỗi quên trường hợp biên: chỗ mất nguyên một nhóm test

![Bốn trường hợp biên cần thử: dữ liệu rỗng, chỉ một phần tử, không có kết quả nào, và mọi giá trị bằng nhau](/assets/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong/truong-hop-bien.svg)

Đề thi chấm tự động thường chia bộ test thành nhiều nhóm, và có hẳn một nhóm dành riêng cho các trường hợp đặc biệt. Bỏ qua nhóm này là mất một phần điểm đáng kể của bài, kể cả khi phần chính đã đúng.

Bốn tình huống cần thử với mọi bài: dữ liệu rỗng hoặc số phần tử bằng không, dữ liệu chỉ có đúng một phần tử, không có kết quả nào thỏa mãn điều kiện, và mọi giá trị trong dữ liệu đều bằng nhau. Riêng trường hợp không có kết quả nào, đề gần như luôn nói rõ phải in ra gì, thường ở cuối phần Kết quả ra, và đó chính là dòng hay bị đọc lướt nhất.

> Đề thi hiếm khi giấu bẫy. Cái gọi là bẫy thường chỉ là một dòng trong đề mà người làm bài chưa đọc kỹ.

Việc cần làm ngay: tự tạo bốn bộ dữ liệu nhỏ theo bốn tình huống trên và chạy thử. Tổng thời gian chưa tới một phút, nhưng đây là bước phân biệt rõ nhất giữa học sinh luyện có phương pháp và học sinh làm xong là nộp.

## Thói quen soát bài 60 giây trước khi bấm nộp

Mười lỗi ở trên đều là lỗi thói quen, và thói quen thì sửa được trong vài buổi nếu có quy trình cố định. Một quy trình soát bài gọn gồm bốn bước, làm theo đúng thứ tự.

- In thử dữ liệu vừa đọc, xem chương trình nhận đúng chưa
- Đọc lại phần Kết quả ra của đề, đối chiếu từng dòng bài in ra
- Kiểm kiểu dữ liệu ở mọi phép nhân và phép cộng dồn
- Chạy thử bốn bộ dữ liệu biên

Quy trình này chỉ hiệu quả khi được lặp đủ nhiều lần trên hệ thống chấm thật, nơi học sinh nhận phản hồi đúng sai ngay sau mỗi lần nộp. Đây cũng là cách luyện xuyên suốt trong [khóa học luyện thi HSG và chuyên Tin](/khoa-hoc-hsg-chuyen-tin), và là lý do các lớp luyện thi nghiêm túc đều gắn với một hệ thống chấm tự động thay vì chỉ chấm tay trên giấy.

> Học sinh mất điểm vì lỗi thói quen thường tiến bộ rất nhanh, vì thứ cần sửa không phải là năng lực mà là quy trình.

## Câu hỏi thường gặp về lỗi khi chấm tự động

**Vì sao bài chạy đúng trên máy mình mà nộp lên vẫn sai?**
Phần lớn trường hợp là do dữ liệu vào thật khác với ví dụ trong đề: xâu có dấu cách, có khoảng trắng thừa, hoặc dữ liệu lớn hơn nhiều so với ví dụ. Ví dụ trong đề chỉ để minh họa cách hiểu bài, không phải để kiểm thử.

**Sai ở test 7 nghĩa là gì, làm sao biết test đó chứa gì?**
Hệ thống thường không cho xem nội dung test ẩn. Cách làm đúng là suy ra từ vị trí: test đầu thường là ví dụ trong đề, test giữa là dữ liệu thường, test cuối là dữ liệu lớn hoặc trường hợp đặc biệt. Sai ở test cuối thường là tràn số hoặc quá thời gian, sai ngay test đầu thường là lỗi đọc hoặc in.

**Nên học C++ hay Python để thi Tin học?**
Các kỳ thi HSG và chuyên Tin ở Việt Nam hiện dùng C++ là chính, chủ yếu vì tốc độ chạy. Python phù hợp cho giai đoạn làm quen tư duy, nhưng khi bắt đầu luyện đề nghiêm túc thì cần chuyển sang C++. Chi tiết so sánh nằm trong bài [Python hay C++ nên học trước](/blog/python-hay-cpp-nen-hoc-truoc), và lộ trình chuyển đổi theo từng lớp nằm trong bài [lộ trình thi chuyên Tin và HSG Tin học](/blog/lo-trinh-thi-chuyen-tin-hsg-tin-hoc).

**Luyện bao nhiêu bài một tuần là đủ?**
Số lượng không quan trọng bằng cách luyện. Ba bài làm kỹ, sai thì tự dò tới khi đúng, hôm sau viết lại từ đầu mà không nhìn bài mẫu, có giá trị hơn mười bài đọc lời giải rồi chép lại. Xem thêm [lộ trình học lập trình theo từng giai đoạn](/lo-trinh) để biết mỗi giai đoạn nên tập trung vào đâu.

## Kết luận

**Khoảng cách giữa một bài 0 điểm và một bài trọn điểm thường không nằm ở thuật toán, mà nằm ở bốn phút cuối trước khi bấm nộp.** Mười lỗi trong bài này đều thuộc loại phát hiện được bằng mắt, chỉ cần biết chỗ để nhìn và có một quy trình soát bài cố định.

Học sinh nào từng mất điểm vì những lỗi này thường nhớ rất lâu, và đó lại là điều tốt. Sự cẩn thận trong lập trình gần như luôn được học qua một lần mất điểm chứ không qua một lời nhắc.

<div style="margin-top:36px;border-radius:26px;padding:38px clamp(22px,5vw,48px);color:#fff;background:radial-gradient(circle at 88% -30%,rgba(242,193,61,.38),transparent 42%),linear-gradient(135deg,#1E3A63,#13294a);">
  <p style="margin:0;font-size:.82rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F2C13D;">Luyện thi Tin học</p>
  <p style="margin:10px 0 6px;font-size:1.45rem;font-weight:800;line-height:1.3;color:#fff;">Muốn con luyện đề trên hệ thống chấm tự động?</p>
  <p style="margin:0 0 22px;color:#dbe7f3;">Lộ trình luyện thi HSG và chuyên Tin theo từng chủ đề, nộp bài là biết kết quả ngay, có giáo viên chữa từng lỗi.</p>
  <p style="display:flex;flex-wrap:wrap;gap:12px;margin:0 0 18px;">
    <a class="btn btn-gold" href="/khoa-hoc-hsg-chuyen-tin" style="text-decoration:none;">Khóa luyện thi HSG và chuyên Tin</a>
    <a class="btn btn-light" href="/khoa-hoc-ctdl-giai-thuat" style="text-decoration:none;">Khóa cấu trúc dữ liệu và giải thuật</a>
    <a class="btn" href="https://zalo.me/0985188655" style="text-decoration:none;background:#1f8b3f;color:#fff;box-shadow:0 10px 24px rgba(31,139,63,.35);">Tư vấn Zalo: 0985 188 655</a>
  </p>
  <p style="margin:0;font-size:.92rem;color:#b7c6dd;">Hoặc xem trước
    <a href="/lo-trinh" style="color:#fff;">lộ trình học theo từng giai đoạn</a> và
    <a href="/khoa-hoc" style="color:#fff;">danh sách các khóa học</a>.
  </p>
</div>
