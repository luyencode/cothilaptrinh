---
title: "Hướng dẫn cài đặt và sử dụng Dev-C++ cho người mới học C++"
description: "Hướng dẫn ngắn gọn cách tải Dev-C++ bản chính thức, cài đặt trên Windows, tổ chức thư mục lưu bài, tạo file .cpp và chạy bằng phím F11, kèm lý do không nên tạo Project khi làm bài tập."
date: 2026-10-01
tags: ["C/C++", "Dev-C++", "Hướng dẫn cài đặt", "Người mới bắt đầu"]
author: "Đặng Kim Thi"
cover: "/assets/blog/huong-dan-cai-dat-va-su-dung-dev-cpp-cho-nguoi-moi/cover.png"
---

Bạn cần một phần mềm gọn nhẹ để bắt đầu viết C++ trên Windows ngay trong buổi học đầu tiên. Bài viết này đi đủ năm việc theo đúng thứ tự: tải Dev-C++, cài đặt, dựng thư mục lưu bài, tạo file và chạy chương trình.

Bài viết cũng nêu rõ một điều mà người mới hay làm sai: bạn không nên tạo Project khi làm bài tập, vì một Project không chứa được nhiều hàm `main`.

> Mỗi bài tập là một file .cpp riêng, nằm đúng thư mục của buổi học. Hai nguyên tắc này giữ cho máy của bạn gọn gàng suốt cả khóa học.

## Tóm tắt nhanh: năm bước dùng Dev-C++

1. **[Tải Dev-C++ trên SourceForge](https://sourceforge.net/projects/orwelldevcpp/)**: bản có sẵn trình biên dịch
2. **Cài đặt kiểu Full**: bạn giữ các lựa chọn mặc định
3. **Dựng cây thư mục**: thư mục gốc, khóa học, từng bài
4. **Tạo Source File, không tạo Project**: mỗi bài một file .cpp
5. **Bấm F11**: phần mềm dịch và chạy chương trình

## Cách tải Dev-C++ bản chính thức

Bạn vào [trang Dev-C++ trên SourceForge](https://sourceforge.net/projects/orwelldevcpp/) và bấm nút Download màu xanh. File tải về có tên `Dev-Cpp 5.11 TDM-GCC 4.9.2 Setup.exe`, dung lượng khoảng 50 MB. Bộ cài này đóng gói sẵn trình biên dịch TDM-GCC 4.9.2, nên bạn không cần cài thêm gì khác.

Bạn nên tải từ địa chỉ trên thay vì các trang chia sẻ lại, vì bộ cài từ nguồn không rõ có thể đã bị chỉnh sửa. Phần mềm miễn phí và là mã nguồn mở theo giấy phép GPL phiên bản 3.

> Dung lượng khoảng 50 MB là dấu hiệu bộ cài đã kèm trình biên dịch. Bạn cài xong là chạy được ngay.

## Cách cài đặt Dev-C++ trên Windows

Bạn bấm đúp vào file vừa tải và làm theo thứ tự sau:

1. **Chọn ngôn ngữ trình cài đặt**: bạn chọn English rồi bấm OK.
2. **Đồng ý điều khoản**: bạn bấm I Agree.
3. **Chọn thành phần**: bạn giữ kiểu Full rồi bấm Next.
4. **Chọn nơi cài**: bạn giữ đường dẫn mặc định rồi bấm Install.
5. **Mở lần đầu**: bạn chọn ngôn ngữ giao diện, giữ phông chữ và chủ đề mặc định, bấm Next cho tới khi vào màn hình chính.

Nếu bạn muốn dùng các cú pháp C++11 như `auto` hay vòng lặp `for` duyệt phần tử, bạn vào Tools, Compiler Options, thẻ Settings, mục Code Generation, rồi chọn `ISO C++11` ở dòng Language standard (-std). Trình biên dịch đi kèm có mặc định là chuẩn cũ hơn, nên bước này giúp tránh lỗi khó hiểu về sau.

## Cách tổ chức thư mục lưu bài C++

![Cây thư mục ba tầng để lưu bài C++ trong Dev-C++: thư mục gốc LapTrinh, thư mục khóa học CPP_CoBan và thư mục từng bài học Bai01_HelloWorld](/assets/blog/huong-dan-cai-dat-va-su-dung-dev-cpp-cho-nguoi-moi/cay-thu-muc.svg)

Bạn tạo thư mục trong File Explorer trước khi mở Dev-C++. Cấu trúc gọn nhất gồm ba tầng:

```
D:\LapTrinh\
    CPP_CoBan\
        Bai01_HelloWorld\
            hello_world.cpp
            tinh_tong.cpp
        Bai02_BienVaKieuDuLieu\
    CPP_LuyenDe\
    TaiLieu\
```

Ba quy tắc đặt tên đi kèm:

- Tên không dấu tiếng Việt, không khoảng trắng, các từ nối bằng gạch dưới
- Số thứ tự hai chữ số ở đầu thư mục bài học, ví dụ `Bai01`, `Bai02`
- Tên file gợi đúng nội dung bài, ví dụ `tinh_tong.cpp`

> Ba tầng thư mục là đủ cho một khóa học. Bạn tạo thư mục trước, tạo file sau, để file không rơi ra Desktop.

## Vì sao không nên tạo Project trong Dev-C++

![So sánh tạo Project và tạo Source File trong Dev-C++: Project dịch chung mọi file nên báo lỗi multiple definition of main, Source File cho mỗi bài chạy riêng](/assets/blog/huong-dan-cai-dat-va-su-dung-dev-cpp-cho-nguoi-moi/khong-tao-project.svg)

Một Project gom mọi file `.cpp` bên trong để dịch thành một chương trình duy nhất, và một chương trình chỉ được có một hàm `main`. Mỗi bài tập lại có hàm `main` riêng, nên khi bạn đặt từ hai bài trở lên vào cùng một Project, trình liên kết báo lỗi `multiple definition of 'main'` và chương trình không chạy.

Vì vậy, khi làm bài tập, bạn chỉ tạo Source File. Mỗi file `.cpp` là một chương trình độc lập, chạy riêng và không ảnh hưởng tới các bài khác trong cùng thư mục. Project chỉ cần thiết khi một chương trình được chia thành nhiều file, thường ở giai đoạn học sau.

> Bài tập một file thì bạn tạo Source File. Project dành cho một chương trình nhiều file, không dành cho nhiều bài tập.

## Cách tạo file và chạy chương trình đầu tiên

Bạn làm bốn thao tác:

1. **Tạo file mới**: bạn chọn File, New, Source File, hoặc bấm Ctrl + N.
2. **Lưu ngay**: bạn bấm Ctrl + S, chọn thư mục `Bai01_HelloWorld`, đặt tên `hello_world.cpp`. Bạn gõ đủ đuôi `.cpp` trong tên file để phần mềm nhận đúng đây là chương trình C++.
3. **Gõ chương trình**: bạn gõ tay từng dòng thay vì sao chép.
4. **Chạy**: bạn bấm F11 để phần mềm vừa dịch vừa chạy.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
```

Một cửa sổ nền đen hiện ra kèm dòng `Hello World`, đó là kết quả của chương trình. Ngoài F11, bạn có thêm F9 để chỉ dịch và F10 để chạy lại bản đã dịch. Khi sửa code, bạn nên bấm Ctrl + S trước khi chạy để chắc chắn phần mềm dịch đúng bản mới nhất.

Sau khi chạy được bài đầu tiên, bước tiếp theo là luyện tập có phản hồi. Bạn có thể viết bài trong Dev-C++, chạy thử với ví dụ mẫu, rồi nộp lên [hệ thống chấm bài code.cothilaptrinh.vn](https://code.cothilaptrinh.vn/) để biết bài đúng hay sai với bộ dữ liệu kiểm thử đầy đủ.

## Câu hỏi thường gặp về Dev-C++

**Dev-C++ có chạy được trên macOS không?**

Dev-C++ là phần mềm dành cho Windows. Người dùng macOS thường chọn VS Code kèm trình biên dịch có sẵn của Xcode Command Line Tools, tham khảo bài [hướng dẫn cài đặt C++](/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world).

**Nên dùng Dev-C++ hay Code::Blocks?**

Cả hai đều phù hợp cho người mới và đều có bản kèm sẵn trình biên dịch. Dev-C++ nhẹ và ít thao tác hơn, còn Code::Blocks có bản phát hành mới hơn. Bạn xem thêm bài [hướng dẫn sử dụng Code::Blocks](/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp) để so sánh.

**Bấm F11 mà cửa sổ kết quả không hiện ra thì làm sao?**

Bạn đọc thông báo ở khung Compiler phía dưới màn hình. Nguyên nhân thường gặp là code có lỗi cú pháp, hoặc file chưa được lưu với đuôi `.cpp`.

## Kết luận

Bạn tải bản Dev-C++ có sẵn trình biên dịch, cài kiểu Full, dựng ba tầng thư mục, rồi mỗi bài tập tạo một Source File và bấm F11. Bạn không tạo Project cho bài tập, vì một Project chỉ chấp nhận một hàm `main`.

Khi đã quen công cụ, bạn có thể tham khảo [lộ trình học lập trình](/lo-trinh) để biết nên học gì tiếp theo.

Từ khóa liên quan để bạn tìm lại bài viết này: #DevCpp #HocCpp #LapTrinhCpp #CaiDatDevCpp #HelloWorld #ToChucThuMuc #NguoiMoiHocLapTrinh #CoThiLapTrinh

<div style="margin-top:36px;border-radius:26px;padding:38px clamp(22px,5vw,48px);color:#fff;background:radial-gradient(circle at 88% -30%,rgba(242,193,61,.38),transparent 42%),linear-gradient(135deg,#1E3A63,#13294a);">
  <p style="margin:0;font-size:.82rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F2C13D;">Bắt đầu với C++</p>
  <p style="margin:10px 0 6px;font-size:1.45rem;font-weight:800;line-height:1.3;color:#fff;">Đã chạy được Hello World, bước tiếp theo là gì?</p>
  <p style="margin:0 0 22px;color:#dbe7f3;">Lộ trình học C++ theo từng chặng, có giáo viên hướng dẫn và hệ thống chấm bài tự động.</p>
  <p style="display:flex;flex-wrap:wrap;gap:12px;margin:0 0 18px;">
    <a class="btn btn-gold" href="/khoa-hoc-c-cpp-web" style="text-decoration:none;">Khóa học C, C++ và lập trình web</a>
    <a class="btn btn-light" href="/khoa-hoc-ctdl-giai-thuat" style="text-decoration:none;">Khóa cấu trúc dữ liệu và giải thuật</a>
    <a class="btn" href="https://zalo.me/0985188655" style="text-decoration:none;background:#1f8b3f;color:#fff;box-shadow:0 10px 24px rgba(31,139,63,.35);">Tư vấn Zalo: 0985 188 655</a>
  </p>
  <p style="margin:0;font-size:.92rem;color:#b7c6dd;">Hoặc luyện tập ngay tại
    <a href="https://code.cothilaptrinh.vn/" style="color:#fff;">hệ thống chấm bài tự động</a>.
  </p>
</div>
