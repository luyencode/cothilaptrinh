---
title: "Hướng dẫn tải và sử dụng Code::Blocks cho người mới học C++"
description: "Hướng dẫn tải Code::Blocks bản có sẵn trình biên dịch, cài đặt trên Windows, tạo file hello_world.cpp chạy bằng phím F9, kèm cách tổ chức thư mục theo môn học, bài học và bài tập cho người mới học C++."
date: 2026-09-07
tags: ["C/C++", "Code::Blocks", "Hướng dẫn cài đặt", "Người mới bắt đầu"]
author: "Đặng Kim Thi"
cover: "/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/cover.png"
---

Người mới học C++ thường vướng ở hai chỗ trước khi kịp học một câu lệnh nào: máy chưa có phần mềm để chạy chương trình, và các file bài làm nằm rải rác khắp Desktop nên vài tuần sau không tìm lại được. Bài viết này đi trọn hai việc đó với Code::Blocks, từ khâu tải đúng bộ cài, cài đặt trên Windows, tạo file `hello_world.cpp` chạy được, cho tới cách dựng cây thư mục theo môn học, bài học và bài tập.

Hai việc này nên làm cùng một lúc, ngay trong buổi đầu tiên. Bạn cài phần mềm để chạy được bài của hôm nay, còn bạn dựng thư mục để giữ được bài của cả khóa học. Người bỏ qua việc thứ hai thường phải gõ lại những bài mình đã từng làm xong.

> Phần mềm chỉ giúp bạn chạy được bài của hôm nay. Cách tổ chức thư mục mới giúp bạn tìm lại được bài của ba tháng trước.

## Tóm tắt nhanh: sáu bước dùng Code::Blocks từ đầu

Dành cho bạn đang cần làm ngay, đây là toàn bộ lộ trình rút gọn, phần chi tiết nằm ở các mục bên dưới:

1. **[Trang tải chính thức](https://www.codeblocks.org/downloads/binaries/)**: nơi lấy bộ cài an toàn
2. **[Bản kèm trình biên dịch](https://sourceforge.net/projects/codeblocks/files/Binaries/25.03/Windows/)**: chọn file có chữ mingw trong tên
3. **Cài đặt kiểu Full**: bạn giữ nguyên các lựa chọn mặc định
4. **Dựng cây thư mục**: một thư mục gốc, thư mục môn học, thư mục từng bài
5. **Tạo file hello_world.cpp**: bạn lưu file trước, bấm F9 sau
6. **[Hệ thống chấm tự động](https://code.cothilaptrinh.vn/)**: nơi luyện tập sau chương trình đầu tiên

## Code::Blocks là gì và vì sao phù hợp với người mới học C++

Code::Blocks là một môi trường phát triển tích hợp mã nguồn mở dành cho C, C++ và Fortran, phát hành theo giấy phép GPL phiên bản 3. Phần mềm được viết bằng C++ với bộ công cụ giao diện wxWidgets, phát triển chính cho Windows và Linux. Bản ổn định mới nhất tính tới thời điểm bài viết là 25.03, phát hành ngày 31 tháng 3 năm 2025.

Ba đặc điểm khiến phần mềm này hợp với người mới. Thứ nhất, bộ cài dành cho Windows có một phiên bản đóng gói sẵn trình biên dịch, nên bạn không phải cài thêm gì và không phải chỉnh biến môi trường Path. Thứ hai, giao diện gọn, số lượng nút bấm vừa phải, người học không bị ngợp như khi mở các bộ công cụ lớn. Thứ ba, chỉ cần một file `.cpp` đơn lẻ là chạy được, bạn chưa cần hiểu khái niệm dự án nhiều file ở giai đoạn đầu.

Phần mềm này cũng có giới hạn của nó. Code::Blocks tập trung vào C, C++ và Fortran, nên khi bạn học thêm Python hay lập trình web thì vẫn cần một công cụ khác. Nếu bạn muốn so sánh với các lựa chọn còn lại, bài [hướng dẫn cài đặt C++ trên Windows](/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world) đối chiếu Code::Blocks với Dev-C++ và VS Code theo từng hoàn cảnh sử dụng.

> Một công cụ tốt cho người mới không phải là công cụ mạnh nhất, mà là công cụ ít bước cấu hình nhất giữa lúc bạn gõ code và lúc chương trình chạy.

## Cách tải Code::Blocks: chọn đúng bản có sẵn trình biên dịch

![So sánh bản cài Code::Blocks có chữ mingw kèm trình biên dịch GCC và bản không có chữ mingw chỉ có giao diện soạn thảo](/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/chon-ban-tai.svg)

Bạn tải phần mềm từ [trang bản dựng chính thức](https://www.codeblocks.org/downloads/binaries/) hoặc từ [kho phát hành trên SourceForge](https://sourceforge.net/projects/codeblocks/files/Binaries/25.03/Windows/). Bạn nên tránh các trang chia sẻ lại bộ cài, vì bộ cài từ nguồn không rõ có thể đã bị chỉnh sửa.

Trang tải đưa ra nhiều file cùng lúc, và đây là chỗ người mới hay chọn nhầm. Chi tiết quyết định nằm ở chữ `mingw` trong tên file: bản có chữ này đóng gói sẵn trình biên dịch GCC của dự án MinGW-W64, còn bản không có chữ này chỉ chứa giao diện soạn thảo. Người tải nhầm bản thứ hai sẽ gặp thông báo lỗi ngay ở lần bấm chạy đầu tiên, dù phần mềm đã cài xong bình thường.

<div style="margin:26px 0;border:1px solid #e9ecf2;border-radius:22px;overflow:hidden;">
  <div style="padding:14px 22px;background:linear-gradient(135deg,#1E3A63,#13294a);color:#fff;font-weight:700;">Các bản cài Code::Blocks 25.03 cho Windows</div>
  <div style="overflow-x:auto;background:#fff;">
    <table style="border-collapse:collapse;width:100%;min-width:680px;margin:0;font-size:.95rem;">
      <thead>
        <tr style="background:#f6f9fc;">
          <th style="padding:12px 18px;text-align:left;border-bottom:1px solid #e9ecf2;">Tên file</th>
          <th style="padding:12px 18px;text-align:left;border-bottom:1px solid #e9ecf2;">Bản này gồm những gì</th>
          <th style="padding:12px 18px;text-align:left;border-bottom:1px solid #e9ecf2;">Phù hợp với ai</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;"><code>codeblocks-25.03mingw-setup.exe</code></td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Giao diện và trình biên dịch GCC của MinGW-W64</td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;"><strong>Người mới học C++</strong>, máy chưa có trình biên dịch</td>
        </tr>
        <tr style="background:#fbfcfe;">
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;"><code>codeblocks-25.03-setup.exe</code></td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Chỉ giao diện soạn thảo, không kèm trình biên dịch</td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Người đã cài sẵn một bộ trình biên dịch riêng</td>
        </tr>
        <tr>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;"><code>codeblocks-25.03-setup-nonadmin.exe</code></td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Bản giao diện, cài được khi tài khoản không có quyền quản trị</td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Máy phòng thực hành, tài khoản bị hạn chế quyền</td>
        </tr>
        <tr style="background:#fbfcfe;">
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;"><code>codeblocks-25.03mingw-nosetup.zip</code></td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Bản nén kèm trình biên dịch, giải nén ra là dùng</td>
          <td style="padding:12px 18px;border-bottom:1px solid #e9ecf2;">Người muốn chạy từ USB, không cài vào máy</td>
        </tr>
        <tr>
          <td style="padding:12px 18px;">Thư mục <code>32bit</code></td>
          <td style="padding:12px 18px;">Các bản tương ứng dành cho Windows 32 bit</td>
          <td style="padding:12px 18px;">Máy đời cũ đang chạy Windows 32 bit</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Với đại đa số người mới, lựa chọn đúng là dòng đầu tiên của bảng. Dung lượng của bản này lớn hơn hẳn các bản còn lại, và đó là dấu hiệu cho thấy bộ trình biên dịch đã nằm sẵn bên trong.

> Một chữ mingw trong tên file tiết kiệm cho bạn cả buổi loay hoay với thông báo lỗi không tìm thấy trình biên dịch.

## Cách cài đặt Code::Blocks trên Windows theo năm bước

![Năm bước cài Code::Blocks trên Windows: tải bộ cài, chạy quyền quản trị, chọn kiểu cài Full, giữ đường dẫn mặc định và nhận trình biên dịch GNU GCC](/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/cai-dat-nam-buoc.svg)

Bạn làm lần lượt năm bước, mỗi bước xong mới sang bước tiếp theo:

1. **Tải bộ cài**: bạn lấy file có chữ `mingw` từ một trong hai địa chỉ chính thức ở mục trên.
2. **Chạy bộ cài**: bạn bấm chuột phải vào file, chọn Run as administrator để tránh lỗi thiếu quyền ghi.
3. **Chọn kiểu cài Full**: bạn giữ nguyên lựa chọn mặc định, vì kiểu cài rút gọn có thể bỏ mất phần trình biên dịch.
4. **Giữ đường dẫn cài mặc định**: bạn không nên đổi sang thư mục có dấu tiếng Việt hoặc có khoảng trắng lạ.
5. **Nhận trình biên dịch ở lần mở đầu tiên**: cửa sổ Compilers auto-detection hiện ra, bạn chọn dòng GNU GCC Compiler rồi bấm OK.

Sau khi cài xong, bạn nên kiểm tra lại một lần cho chắc. Bạn mở trình đơn Settings, chọn Compiler, xem mục Toolchain executables: nếu ô Compiler's installation directory đã trỏ tới thư mục MinGW nằm trong thư mục cài Code::Blocks thì phần cài đặt đã hoàn tất. Trường hợp ô này trống, bạn nhiều khả năng đã tải nhầm bản không có chữ `mingw`.

> Bạn kiểm tra trình biên dịch ngay sau khi cài, thay vì đợi tới lúc bấm chạy mới phát hiện thiếu. Hai phút kiểm tra đổi lấy sự yên tâm cho cả khóa học.

## Cách tạo thư mục và file hello_world.cpp đầu tiên

![Bốn bước tạo file hello_world.cpp trong Code::Blocks: mở file trống, lưu với đuôi cpp, gõ chương trình và bấm F9 để dịch và chạy](/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/tao-file-hello.svg)

Bạn tạo thư mục trước, tạo file sau. Thứ tự này quan trọng, vì Code::Blocks sẽ hỏi nơi lưu ngay khi bạn lưu file lần đầu, và nếu lúc đó chưa có thư mục thì file rất dễ rơi vào Desktop hoặc thư mục Documents.

Bạn mở File Explorer, vào ổ đĩa dữ liệu, tạo thư mục `LapTrinh`, bên trong tạo tiếp thư mục `CPP_CoBan`, rồi bên trong nữa tạo thư mục `Bai01_HelloWorld`. Đường dẫn đầy đủ khi đó là `D:\LapTrinh\CPP_CoBan\Bai01_HelloWorld`. Tên các thư mục đều không dấu và không khoảng trắng, đây là thói quen nên giữ từ đầu.

Bạn quay lại Code::Blocks và làm bốn thao tác. Thứ nhất, bạn chọn File, New, Empty file trên thanh trình đơn. Thứ hai, bạn bấm Ctrl và S để lưu, đặt tên `hello_world.cpp` và chọn đúng thư mục `Bai01_HelloWorld` vừa tạo. Thứ ba, bạn gõ chương trình dưới đây, gõ tay từng dòng thay vì sao chép cả khối. Thứ tư, bạn bấm phím F9 để phần mềm vừa dịch vừa chạy.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
```

Một cửa sổ nền đen hiện ra kèm dòng chữ `Hello World`, đó là kết quả chương trình của bạn. Ngoài F9, bạn có thêm ba tổ hợp phím hay dùng: Ctrl và F9 chỉ dịch mà không chạy, Ctrl và F10 chạy lại bản đã dịch, còn F8 mở chế độ gỡ lỗi cho các bài phức tạp về sau.

Một chi tiết đáng chú ý ở bước lưu file: chỉ khi file đã mang đuôi `.cpp` thì Code::Blocks mới tô màu cú pháp. Nếu chữ trong cửa sổ soạn thảo vẫn một màu đen, bạn nên kiểm tra lại tên file, khả năng cao file đang được lưu thành `hello_world.cpp.txt`.

> Màu sắc trong cửa sổ soạn thảo không phải để trang trí. Đó là tín hiệu đầu tiên cho biết phần mềm đã hiểu bạn đang viết C++.

## Cách tổ chức thư mục theo môn học, bài học và bài tập

![Cây thư mục ba tầng cho việc học lập trình: thư mục gốc LapTrinh, thư mục môn học CPP_CoBan và thư mục từng bài học Bai01_HelloWorld](/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/cay-thu-muc.svg)

Cấu trúc phù hợp với người đang học gồm ba tầng, không nên nhiều hơn. Tầng thứ nhất là một thư mục gốc duy nhất cho toàn bộ việc học lập trình. Tầng thứ hai là từng môn học hoặc từng khóa học. Tầng thứ ba là từng bài học, và các file bài tập của buổi đó nằm ngay bên trong.

```
D:\LapTrinh\
    CPP_CoBan\
        Bai01_HelloWorld\
            hello_world.cpp
            bai_tap_01.cpp
            bai_tap_02.cpp
            ghi_chu.txt
        Bai02_BienVaKieuDuLieu\
        Bai03_CauLenhReNhanh\
    CPP_LuyenDe\
    TaiLieu\
```

Ba thư mục ở tầng hai trong ví dụ trên phục vụ ba mục đích khác nhau. Thư mục `CPP_CoBan` chứa bài theo từng buổi học. Thư mục `CPP_LuyenDe` chứa bài luyện thêm và các đề đã làm, thường tổ chức theo dạng bài thay vì theo buổi. Thư mục `TaiLieu` chứa file PDF, đề bài và ảnh chụp, tách riêng để thư mục code không bị lẫn.

File `ghi_chu.txt` trong mỗi thư mục bài học là một thói quen nhỏ nhưng có ích lâu dài. Bạn ghi vào đó vài dòng: buổi này học gì, mình vướng chỗ nào, lỗi nào đã sửa được và sửa bằng cách nào. Khi ôn lại trước kỳ kiểm tra, những dòng ghi chú ấy nhắc lại bối cảnh nhanh hơn nhiều so với việc đọc lại code.

Với các bạn học theo lộ trình dài hơn, cách chia thư mục cũng nên bám theo chặng học. Bạn có thể tham khảo cách chia chặng trong [lộ trình học lập trình](/lo-trinh) rồi đặt tên thư mục môn học tương ứng, như vậy thư mục trên máy và tiến trình học đi cùng một nhịp.

> Ba tầng thư mục là đủ cho một khóa học. Thêm tầng thứ tư, bạn bắt đầu mất thời gian đi tìm chính thư mục của mình.

## Quy tắc đặt tên file và thư mục khi học lập trình

![Đối chiếu cách đặt tên file nên theo và cách đặt tên nên tránh khi học lập trình, ví dụ Bai01_HelloWorld và tinh_tong_day_so.cpp](/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/quy-tac-dat-ten.svg)

Bốn quy tắc dưới đây gọn nhưng đủ dùng cho cả khóa học:

- Tên không dấu tiếng Việt và không khoảng trắng, các từ nối bằng gạch dưới
- Số thứ tự hai chữ số ở đầu tên thư mục bài học, ví dụ `Bai01`, `Bai02`
- Tên file gợi đúng nội dung bài, ví dụ `tinh_tong_day_so.cpp`
- Bản sửa lần sau ghi rõ hậu tố phiên bản, ví dụ `bai_tap_03_v2.cpp`

Quy tắc số thứ tự hai chữ số có một lý do kỹ thuật. Nhiều công cụ sắp xếp tên theo thứ tự bảng mã chứ không theo giá trị số, khi đó `Bai10` đứng ngay sau `Bai1` và trước `Bai2`. File Explorer của Windows có xử lý riêng cho phần số nên vẫn hiển thị đúng thứ tự, nhưng khi bạn nén thư mục, đưa lên kho lưu trữ trực tuyến hoặc liệt kê bằng dòng lệnh thì thứ tự sai lại xuất hiện. Với các khóa học từ mười buổi trở lên, thêm một chữ số 0 là cách giữ đúng thứ tự ở mọi nơi.

Quy tắc đặt tên gợi nội dung thì phục vụ chính bạn của vài tháng sau. Tên `bai_tap_03.cpp` cho biết vị trí bài trong buổi học, còn tên `tinh_tong_day_so.cpp` cho biết bài đó làm gì. Khi cần tìm lại một kỹ thuật đã dùng, bạn tìm theo nội dung nhanh hơn tìm theo số thứ tự.

> Bạn đặt tên file cho người sẽ đọc lại nó, và người đó thường chính là bạn của ba tháng sau.

## Bốn lỗi hay gặp khi dùng Code::Blocks lần đầu

![Bốn lỗi hay gặp khi dùng Code::Blocks lần đầu và cách xử lý từng lỗi](/assets/blog/huong-dan-tai-va-su-dung-codeblocks-cho-nguoi-moi-hoc-cpp/loi-hay-gap-codeblocks.svg)

Lỗi thứ nhất là thông báo không tìm thấy trình biên dịch. Nguyên nhân thường gặp là bộ cài không có chữ `mingw`. Bạn gỡ phần mềm ra, tải lại đúng bản kèm trình biên dịch rồi cài lại, cách này nhanh hơn việc tự khai báo đường dẫn bằng tay.

Lỗi thứ hai là cửa sổ kết quả hiện lên rồi tắt ngay. Trường hợp này thường xảy ra khi bạn mở file `.exe` bằng cách bấm đúp trong File Explorer, vì chương trình chạy xong là cửa sổ tự đóng. Bạn nên chạy bằng phím F9 ngay trong Code::Blocks, phần mềm giữ cửa sổ lại kèm dòng thông báo tiến trình đã kết thúc.

Lỗi thứ ba là chương trình chạy ra kết quả của lần sửa trước. Nguyên nhân gần như luôn là file chưa được lưu, và nhiều người mới không để ý dấu hoa thị nhỏ cạnh tên file trên thẻ. Bạn bấm Ctrl và S rồi bấm F9 lại là kết quả cập nhật đúng.

Lỗi thứ tư là chữ tiếng Việt in ra bị vỡ thành ký tự lạ. Nguyên nhân nằm ở bảng mã của cửa sổ dòng lệnh Windows chứ không nằm ở chương trình bạn viết. Cách xử lý đơn giản nhất cho người mới là viết thông báo bằng tiếng Việt không dấu, còn phần xử lý bảng mã bạn để lại cho giai đoạn sau.

> Ba trong bốn lỗi trên đến từ thao tác chứ không đến từ chương trình. Đọc trước một lần, bạn giữ được buổi học đầu tiên cho việc học.

## Sau chương trình đầu tiên, bạn luyện tập ở đâu

Chương trình chạy được là điều kiện cần, còn điều kiện đủ để tiến bộ là luyện tập có phản hồi. Người học một mình thường mất nhiều thời gian ở khâu tự kiểm tra: bài chạy đúng với ví dụ trong sách chưa chắc đã đúng với các trường hợp biên, và người mới rất khó tự nghĩ ra những trường hợp ấy. Hệ thống chấm tự động giải quyết đúng điểm này, vì mỗi bài nộp lên đều được chạy qua một bộ dữ liệu kiểm thử đầy đủ.

Bạn có thể luyện tại [hệ thống chấm bài code.cothilaptrinh.vn](https://code.cothilaptrinh.vn/), nơi các bài tập được sắp theo chủ đề từ cơ bản tới nâng cao. Cách làm hợp lý là mỗi bài viết trong Code::Blocks trước, chạy thử với ví dụ mẫu, rồi mới dán lên hệ thống để chấm. Bạn giữ file `.cpp` trong đúng thư mục bài học, như vậy mỗi bài đã nộp đều còn bản lưu trên máy.

Khi cần một lộ trình có người hướng dẫn, bạn tham khảo [khóa học C, C++ và lập trình web](/khoa-hoc-c-cpp-web) hoặc [khóa học cấu trúc dữ liệu và giải thuật](/khoa-hoc-ctdl-giai-thuat), tùy vào việc bạn đang bắt đầu hay đã qua phần cú pháp cơ bản.

> Một bài nộp lên hệ thống chấm cho bạn biết đúng hay sai trong vài giây. Một bài để trong máy có thể sai suốt cả tháng mà bạn không biết.

## Câu hỏi thường gặp về Code::Blocks

**Code::Blocks có miễn phí không?**

Phần mềm miễn phí và là mã nguồn mở, phát hành theo giấy phép GPL phiên bản 3. Bạn tải trực tiếp từ trang chính thức mà không phải trả phí và không cần mã kích hoạt. Các trang yêu cầu trả tiền để tải Code::Blocks đều không phải nguồn chính thức.

**Nên tải Code::Blocks bản nào cho Windows?**

Người mới nên tải bản có chữ `mingw` trong tên file, ví dụ `codeblocks-25.03mingw-setup.exe`. Bản này đóng gói sẵn trình biên dịch nên cài xong là chạy được ngay. Bản không có chữ `mingw` chỉ hợp với người đã cài trình biên dịch riêng từ trước.

**Học C++ trong Code::Blocks có bắt buộc tạo Project không?**

Với các bài tập một file, bạn không cần tạo Project. Bạn mở một file trống, lưu lại với đuôi `.cpp` rồi bấm F9 là phần mềm dịch và chạy được. Khái niệm Project trở nên cần thiết khi chương trình chia thành nhiều file nguồn, thường là ở giai đoạn học sau.

**Máy dùng macOS thì cài Code::Blocks thế nào?**

Bản dựng chính thức cho macOS đã lâu chưa được cập nhật, nên đây không phải lựa chọn thuận tiện trên hệ điều hành này. Người dùng macOS thường chọn VS Code kèm trình biên dịch có sẵn của Xcode Command Line Tools. Bài [hướng dẫn cài đặt C++ trên Windows](/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world) có phần cấu hình VS Code mà bạn tham khảo được cho hướng này.

**Nên bắt đầu học C++ từ đâu nếu chưa từng lập trình?**

Bạn nên đi qua ba chặng theo thứ tự: cú pháp cơ bản và cấu trúc điều khiển, mảng và xâu ký tự, sau đó là các thuật toán nền tảng. Phần [lộ trình học lập trình](/lo-trinh) mô tả chi tiết từng chặng, còn trang [khóa học](/khoa-hoc) liệt kê các lớp tương ứng với từng giai đoạn.

## Kết luận

**Hai việc của buổi đầu tiên là cài đúng bộ phần mềm và dựng đúng cây thư mục.** Bạn tải bản Code::Blocks có chữ `mingw`, cài theo năm bước, tạo file `hello_world.cpp` trong thư mục bài học rồi bấm F9. Sau đó, bạn giữ nếp ba tầng thư mục và bốn quy tắc đặt tên cho tất cả các bài về sau.

Những thao tác này mất chưa tới một buổi, nhưng chúng theo bạn suốt cả quá trình học. Một môi trường gọn gàng không làm bạn giỏi hơn, nó chỉ đơn giản là gỡ bớt những thứ vướng chân trên đường đi.

Từ khóa liên quan để bạn tìm lại bài viết này: #CodeBlocks #HocCpp #LapTrinhCpp #HelloWorld #CaiDatCodeBlocks #ToChucThuMuc #TuHocLapTrinh #NguoiMoiHocLapTrinh #CoThiLapTrinh #TinHoc

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
