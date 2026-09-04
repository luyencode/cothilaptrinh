---
title: "Hướng dẫn cài đặt C++ trên Windows và chạy chương trình Hello World"
description: "Hướng dẫn cài đặt C++ trên Windows cho người mới: chạy thử ngay trên OneCompiler, cài Code::Blocks hoặc Dev-C++, hoặc dùng VS Code với MinGW-w64, kèm chương trình Hello World hoàn chỉnh và cách xử lý các lỗi hay gặp."
date: 2026-09-03
tags: ["C/C++", "Hướng dẫn cài đặt", "Người mới bắt đầu"]
author: "Đặng Kim Thi"
cover: "/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/cover.png"
---

Buổi học C++ đầu tiên của nhiều học sinh dừng lại ở đúng một chỗ: máy tính chưa chạy được dòng lệnh nào. Bài viết này đi qua ba cách cài đặt và chạy chương trình C++ trên Windows, từ cách không cần cài gì cho tới cách dùng được nhiều năm, kèm chương trình Hello World hoàn chỉnh và cách xử lý những lỗi hay gặp ở lần chạy đầu tiên.

Bạn không cần làm cả ba cách. Bạn chỉ cần một cách chạy được ngay hôm nay, vì thứ quyết định việc học có đi tiếp hay không là cảm giác nhìn thấy dòng chữ đầu tiên hiện ra trên màn hình.

> Rào cản đầu tiên của người học C++ hiếm khi là thuật toán. Rào cản đó thường chỉ là một cửa sổ báo lỗi vì máy chưa tìm thấy trình biên dịch.

![Ba cách chạy chương trình C++ đầu tiên trên Windows: OneCompiler trên trình duyệt, bộ cài trọn gói Code::Blocks hoặc Dev-C++, và VS Code với MinGW-w64](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/ba-cach-chay-cpp.svg)

## Tóm tắt nhanh: ba cách cài đặt và chạy C++ trên Windows

1. **[OneCompiler](https://onecompiler.com/cpp)**: chạy thẳng trên trình duyệt, không cài phần mềm
2. **[Code::Blocks](https://www.codeblocks.org/downloads/binaries/)**: bộ cài có sẵn trình biên dịch, chọn file có chữ mingw
3. **[Embarcadero Dev-C++](https://www.embarcadero.com/free-tools/dev-cpp)**: bộ cài nhẹ, quen thuộc với học sinh thi Tin học
4. **[VS Code với MinGW-w64](https://code.visualstudio.com/docs/cpp/config-mingw)**: cài lâu hơn nhưng dùng được cho cả Python và web
5. **[Hệ thống chấm tự động](https://code.cothilaptrinh.vn/)**: nơi luyện tập sau khi chương trình đầu tiên chạy được

## Chương trình Hello World trong C++ gồm những phần nào?

Trước khi cài đặt bất cứ thứ gì, bạn nên biết mình sắp gõ cái gì. Chương trình C++ đầu tiên chỉ có bảy dòng, và bảy dòng này là khung xương của mọi chương trình C++ về sau.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
```

Bạn đọc từng phần theo đúng thứ tự máy đọc. Dòng `#include <iostream>` báo cho chương trình biết nó sẽ dùng bộ công cụ nhập xuất có sẵn, tức là khả năng in ra màn hình và đọc từ bàn phím. Dòng `using namespace std;` cho phép bạn viết ngắn gọn `cout` thay vì `std::cout`. Khối `int main()` là nơi máy bắt đầu chạy, và mọi lệnh nằm giữa cặp ngoặc nhọn của khối này. Lệnh `cout << "Hello World";` in dòng chữ ra màn hình, còn `return 0;` báo với hệ điều hành rằng chương trình đã kết thúc bình thường.

![Cấu trúc chương trình Hello World trong C++: dòng include, dòng namespace, hàm main và lệnh cout](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/cau-truc-hello-world.svg)

Bạn nên gõ lại từng dòng thay vì sao chép. Việc gõ tay ở chương trình đầu tiên giúp tay quen với dấu chấm phẩy cuối lệnh và cặp ngoặc nhọn, hai thứ gây ra phần lớn lỗi biên dịch của người mới.

> Chương trình đầu tiên đáng để gõ tay. Bạn học được cú pháp qua ngón tay chứ không qua mắt nhìn.

## Cách 1: chạy C++ trên OneCompiler, không cần cài đặt

Cách nhanh nhất để có kết quả trong vòng hai phút là dùng một trình biên dịch trực tuyến. [OneCompiler](https://onecompiler.com/cpp) là một lựa chọn phù hợp cho người mới: trang này chạy GCC với chuẩn C++17, có sẵn ô nhập liệu và không bắt bạn tạo tài khoản trước khi chạy thử.

![Bốn bước chạy Hello World trên OneCompiler: mở trang web, xóa code mẫu, gõ chương trình và bấm Run](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/oncompiler-bon-buoc.svg)

Bạn làm theo bốn bước. Thứ nhất, bạn mở địa chỉ `onecompiler.com/cpp` bằng Chrome hoặc Edge. Thứ hai, bạn bôi đen đoạn code mẫu có sẵn rồi xóa đi. Thứ ba, bạn gõ chương trình Hello World ở phần trên. Thứ tư, bạn bấm nút Run và xem kết quả hiện ra trong khung Output bên phải.

Với những bài tập cần nhập dữ liệu, bạn gõ dữ liệu vào ô STDIN nằm ở thẻ I/O rồi mới bấm Run. Chương trình sẽ đọc từ ô này giống hệt như đọc từ bàn phím, nên bạn thử được các bài có `cin` mà không cần cài gì thêm.

Cách này có một giới hạn cần biết trước: bạn phải có mạng Internet, và bạn không quản lý được nhiều file trong cùng một dự án. Vì vậy OneCompiler hợp với giai đoạn thử nghiệm và làm bài tập ngắn, còn khi bắt đầu học nghiêm túc thì bạn nên có trình biên dịch trên máy của mình.

> Trình biên dịch trực tuyến giải quyết được ngày đầu tiên, nhưng một người học C++ đường dài vẫn cần công cụ chạy được khi mất mạng.

## Cách 2: cài Code::Blocks hoặc Dev-C++, bộ cài có sẵn trình biên dịch

Với học sinh mới bắt đầu, bộ cài trọn gói là lựa chọn ít rủi ro nhất. Hai bộ phổ biến ở Việt Nam là Code::Blocks và Embarcadero Dev-C++, cả hai đều miễn phí và đều đóng gói sẵn trình biên dịch bên trong.

![So sánh hai bộ cài có sẵn trình biên dịch cho Windows: Code::Blocks và Embarcadero Dev-C++](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/bo-cai-tron-goi.svg)

Với **Code::Blocks**, bạn vào trang tải bản cài đặt và chọn đúng file có chữ `mingw` trong tên, ví dụ dạng `codeblocks-xx.xxmingw-setup.exe`. Đây là chi tiết quan trọng nhất của cả bước cài đặt: bản không có chữ `mingw` chỉ chứa giao diện soạn thảo mà thiếu trình biên dịch, và người tải nhầm bản này sẽ gặp lỗi ngay khi bấm chạy. Sau khi cài xong, bạn chọn File, New, Empty file, lưu file với đuôi `.cpp`, gõ chương trình rồi bấm phím F9 để vừa dịch vừa chạy.

Với **Embarcadero Dev-C++**, bạn tải từ trang chính thức của Embarcadero. Bản này đã kèm trình biên dịch TDM-GCC nên bạn không phải cài thêm gì. Sau khi cài xong, bạn chọn File, New, Source File, lưu lại với đuôi `.cpp` rồi bấm phím F11 để chạy.

Một lưu ý chung cho cả hai phần mềm: bạn nên lưu file vào một thư mục có đường dẫn không dấu, ví dụ `D:\hoccpp\`, thay vì lưu trong thư mục có tên tiếng Việt. Nhiều trình biên dịch cũ xử lý đường dẫn có dấu không ổn định, và lỗi sinh ra từ đó rất khó đoán với người mới.

> Bạn cài một trong hai phần mềm là đủ. Cài cả hai không giúp học nhanh hơn, chỉ làm máy nặng thêm và làm bạn phân vân mỗi lần mở bài.

## Cách 3: cài VS Code với MinGW-w64 để dùng lâu dài

Visual Studio Code là trình soạn thảo được dùng rộng rãi trong công việc thật, và nó dùng chung cho C++, Python, web và nhiều ngôn ngữ khác. Điểm khác biệt so với hai cách trên là VS Code không kèm trình biên dịch, nên bạn phải cài thêm MinGW-w64, tức là bộ GCC dành cho Windows.

![Năm bước cài VS Code với MinGW-w64 trên Windows và kiểm tra bằng lệnh g++ --version](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/vscode-mingw-nam-buoc.svg)

Bạn làm theo năm bước sau, mỗi bước xong mới sang bước tiếp theo:

1. **Cài Visual Studio Code**: bạn tải bản cho Windows tại `code.visualstudio.com` rồi cài như một phần mềm thông thường.
2. **Cài tiện ích C/C++**: bạn mở mục Extensions trong VS Code, gõ từ khóa `C++`, chọn tiện ích của Microsoft rồi bấm Install.
3. **Cài trình biên dịch MinGW-w64**: bạn có hai đường. Đường thứ nhất là cài MSYS2 theo tài liệu chính thức của VS Code rồi chạy lệnh cài bộ công cụ. Đường thứ hai, nhẹ hơn cho người mới, là tải bản đóng gói sẵn tại `winlibs.com` và giải nén vào một thư mục cố định, ví dụ `C:\mingw64`.
4. **Thêm thư mục bin vào biến môi trường Path**: bạn mở Windows Settings, tìm mục sửa biến môi trường cho tài khoản, chọn biến `Path` rồi thêm đường dẫn tới thư mục `bin`, ví dụ `C:\mingw64\bin`. Windows nhờ dòng khai báo này mới tìm thấy lệnh dịch code ở mọi thư mục.
5. **Kiểm tra lại**: bạn mở một cửa sổ Command Prompt mới rồi gõ `g++ --version`. Máy in ra số phiên bản nghĩa là phần cài đặt đã xong.

Khi đã có trình biên dịch, bạn dịch và chạy chương trình bằng hai lệnh trong terminal của VS Code:

```
g++ hello.cpp -o hello.exe
hello.exe
```

Bước thêm Path là bước nhiều người bỏ qua và cũng là nguyên nhân của hầu hết thắc mắc kiểu "cài rồi mà máy vẫn báo không nhận lệnh". Bạn cũng cần đóng và mở lại cửa sổ dòng lệnh sau khi sửa Path, vì cửa sổ đang mở vẫn giữ giá trị cũ.

> Máy tính không tự biết bạn vừa cài gì. Biến môi trường Path chính là mẩu giấy chỉ đường mà bạn phải tự viết cho hệ điều hành.

## Nên chọn cách nào? Bảng so sánh ba lựa chọn

Ba cách trên không cạnh tranh nhau mà hợp với ba hoàn cảnh khác nhau. Bạn đối chiếu bảng dưới đây để chọn nhanh.

<div style="margin:26px 0;border:1px solid #e9ecf2;border-radius:22px;overflow:hidden;">
  <div style="padding:14px 22px;background:linear-gradient(135deg,#1E3A63,#13294a);color:#fff;font-weight:700;">So sánh ba cách chạy C++ trên Windows</div>
  <div style="overflow-x:auto;background:#fff;">
    <table style="border-collapse:collapse;width:100%;min-width:680px;margin:0;font-size:.95rem;">
      <thead>
        <tr style="background:#f6f9fc;">
          <th style="text-align:left;padding:12px 18px;color:#75849a;font-size:.76rem;letter-spacing:1.1px;text-transform:uppercase;border-bottom:1px solid #e9ecf2;">Lựa chọn</th>
          <th style="text-align:left;padding:12px 18px;color:#75849a;font-size:.76rem;letter-spacing:1.1px;text-transform:uppercase;border-bottom:1px solid #e9ecf2;">Thời gian chuẩn bị</th>
          <th style="text-align:left;padding:12px 18px;color:#75849a;font-size:.76rem;letter-spacing:1.1px;text-transform:uppercase;border-bottom:1px solid #e9ecf2;">Hợp với ai</th>
          <th style="text-align:left;padding:12px 18px;color:#75849a;font-size:.76rem;letter-spacing:1.1px;text-transform:uppercase;border-bottom:1px solid #e9ecf2;">Điểm cần lưu ý</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;font-weight:700;color:#1E3A63;white-space:nowrap;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#2e86c9;margin-right:9px;"></span>OneCompiler</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#2b3a4f;">Khoảng 2 phút</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#2b3a4f;">Người muốn thử ngay, máy không được cài phần mềm</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#75849a;">Cần mạng, khó quản lý dự án nhiều file</td>
        </tr>
        <tr style="background:#fbfcfe;">
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;font-weight:700;color:#1E3A63;white-space:nowrap;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#1f8b3f;margin-right:9px;"></span>Code::Blocks</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#2b3a4f;">Khoảng 15 phút</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#2b3a4f;">Học sinh mới học, lớp học ở trường</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#75849a;">Phải tải đúng bản có chữ mingw</td>
        </tr>
        <tr>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;font-weight:700;color:#1E3A63;white-space:nowrap;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#1f8b3f;margin-right:9px;"></span>Dev-C++</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#2b3a4f;">Khoảng 10 phút</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#2b3a4f;">Học sinh ôn thi Tin học, máy cấu hình yếu</td>
          <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;color:#75849a;">Giao diện đơn giản, ít công cụ hỗ trợ nâng cao</td>
        </tr>
        <tr style="background:#fbfcfe;">
          <td style="padding:13px 18px;font-weight:700;color:#1E3A63;white-space:nowrap;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#F2C13D;margin-right:9px;"></span>VS Code với MinGW-w64</td>
          <td style="padding:13px 18px;color:#2b3a4f;">Khoảng 30-45 phút</td>
          <td style="padding:13px 18px;color:#2b3a4f;">Người học đường dài, học thêm Python hoặc web</td>
          <td style="padding:13px 18px;color:#75849a;">Phải cài trình biên dịch riêng và khai báo Path</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Gợi ý thực tế cho học sinh mới bắt đầu: bạn chạy thử trên OneCompiler trong buổi đầu tiên để thấy chương trình hoạt động, rồi cài Code::Blocks hoặc Dev-C++ cho các buổi tiếp theo. Khi đã viết được vài chục chương trình và bắt đầu thấy chật, bạn chuyển sang VS Code.

## Bốn lỗi hay gặp khi chạy C++ lần đầu trên Windows

Lần chạy đầu tiên hiếm khi suôn sẻ, và điều đó bình thường. Bốn thông báo dưới đây chiếm phần lớn tình huống mà người mới gặp phải, lỗi nào cũng có nguyên nhân rõ ràng.

![Bốn lỗi hay gặp khi chạy C++ lần đầu trên Windows và cách xử lý từng lỗi](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/loi-thuong-gap.svg)

**Máy báo `'g++' is not recognized`**. Windows chưa tìm thấy trình biên dịch. Bạn kiểm tra lại biến môi trường Path, xem đường dẫn có trỏ đúng vào thư mục `bin` hay không, rồi đóng cửa sổ dòng lệnh và mở lại.

**Máy báo `expected ';' before ...`**. Chương trình thiếu một dấu chấm phẩy. Bạn xem số dòng trong thông báo lỗi, và trong đa số trường hợp dấu bị thiếu nằm ở cuối dòng ngay phía trên dòng được báo chứ không phải chính dòng đó.

**Máy báo `cout was not declared in this scope`**. Chương trình thiếu dòng `#include <iostream>` hoặc thiếu dòng `using namespace std;`. Bạn kiểm tra lại hai dòng đầu, chú ý cặp dấu ngoặc nhọn quanh chữ `iostream` và chính tả của chữ `namespace`.

**Cửa sổ đen hiện ra rồi vụt tắt**. Đây không phải lỗi. Chương trình chạy xong và tự đóng, nhanh tới mức mắt không kịp thấy. Bạn chạy bằng phím F9 của Code::Blocks hoặc F11 của Dev-C++ để phần mềm giữ cửa sổ lại, hoặc chạy file `.exe` từ Command Prompt thay vì bấm đúp vào file.

> Thông báo lỗi của trình biên dịch không phải lời phê bình. Đó là dòng chỉ dẫn chính xác nhất bạn có, và người học C++ giỏi lên chủ yếu nhờ tập đọc nó.

Nếu bạn muốn tìm hiểu sâu hơn về những lỗi khiến bài làm bị trừ điểm oan khi nộp lên hệ thống chấm, bài viết [những lỗi khiến bài lập trình bị 0 điểm khi chấm tự động](/blog/loi-khien-bai-lap-trinh-0-diem-khi-cham-tu-dong) đi vào từng trường hợp cụ thể.

## Sau Hello World, bạn luyện tập ở đâu?

Chương trình đầu tiên chạy được là một mốc đáng mừng, nhưng nó mới chứng minh máy đã sẵn sàng chứ chưa chứng minh người học đã hiểu. Phần quyết định nằm ở những bài tập ngay sau đó.

![Bốn chặng đầu tiên của người mới học C++: in ra màn hình, nhập và tính, điều kiện và vòng lặp, nộp bài có chấm](/assets/blog/huong-dan-cai-dat-cpp-tren-windows-chay-hello-world/sau-hello-world.svg)

Thứ tự hợp lý cho vài tuần đầu gồm bốn chặng. Chặng một, bạn tập in chữ và in số, làm quen với `endl` để xuống dòng. Chặng hai, bạn khai báo biến, dùng `cin` để đọc dữ liệu và làm các bài tính toán đơn giản. Chặng ba, bạn viết `if` và `for` cho những bài cần nhiều bước. Chặng bốn, bạn bắt đầu nộp bài lên một hệ thống chấm tự động.

Chặng cuối quan trọng hơn vẻ ngoài của nó. Khi tự chạy trên máy, người học dễ hài lòng với kết quả đúng ở một trường hợp thử. Hệ thống chấm tự động chạy bài làm qua nhiều bộ dữ liệu khác nhau, trong đó có các trường hợp biên mà người viết ít khi nghĩ tới, nên nó chỉ ra ngay chỗ chương trình chưa chặt. Học sinh muốn luyện theo cách này có thể nộp bài trực tiếp trên [hệ thống chấm code tự động](https://code.cothilaptrinh.vn/) của Cô Thi Lập Trình, hoặc theo [khóa học C/C++ từ cơ bản đến nâng cao](/khoa-hoc-c-cpp-web) nếu muốn có lộ trình và người kèm sát.

> Chương trình chạy đúng trên máy của bạn và chương trình đúng là hai chuyện khác nhau. Bộ dữ liệu thử của người viết thường dễ hơn bộ dữ liệu thật.

## Câu hỏi thường gặp về cài đặt C++ trên Windows

**Máy tính cấu hình yếu có cài được C++ không?**
Có. Trình biên dịch C++ nhẹ hơn nhiều so với các bộ IDE lớn. Dev-C++ và Code::Blocks chạy được trên những máy đã dùng nhiều năm, và bản thân MinGW-w64 chiếm vài trăm megabyte. Nếu máy quá yếu hoặc bị hạn chế quyền cài phần mềm, bạn dùng OneCompiler trên trình duyệt.

**Học sinh nên chọn Dev-C++ hay VS Code?**
Điều đó phụ thuộc vào giai đoạn học. Học sinh mới bắt đầu nên chọn Dev-C++ hoặc Code::Blocks để rút ngắn phần cài đặt và dồn thời gian cho việc viết code. Học sinh đã viết được vài chục chương trình, hoặc đang học thêm Python và web, nên chuyển sang VS Code vì công cụ này dùng chung cho nhiều ngôn ngữ.

**Cài xong mà máy vẫn báo không nhận lệnh g++ thì làm thế nào?**
Bạn kiểm tra ba điểm theo thứ tự. Thứ nhất, thư mục `bin` đã được thêm vào biến môi trường Path chưa. Thứ hai, đường dẫn đã thêm có đúng chính tả và có thật trên ổ đĩa không. Thứ ba, bạn đã đóng và mở lại cửa sổ dòng lệnh sau khi sửa Path chưa, vì cửa sổ cũ vẫn giữ giá trị trước đó.

**Chạy C++ trên trình duyệt có đủ để ôn thi học sinh giỏi không?**
Trình biên dịch trực tuyến đủ cho giai đoạn làm quen và cho các bài tập ngắn, nhưng chưa đủ cho việc ôn thi. Học sinh ôn thi cần luyện thao tác đọc dữ liệu, gỡ lỗi và canh thời gian chạy trên máy thật, đồng thời cần nộp bài lên hệ thống chấm có bộ dữ liệu đầy đủ. Bạn có thể tham khảo [lộ trình luyện thi HSG và chuyên Tin](/khoa-hoc-hsg-chuyen-tin) để biết các mốc cần đạt.

**Nên học C++ trước hay Python trước?**
Câu trả lời phụ thuộc vào mục tiêu của người học chứ không phụ thuộc vào ngôn ngữ. Bài viết [Python hay C/C++ nên học trước](/blog/python-hay-cpp-nen-hoc-truoc) phân tích kỹ từng hoàn cảnh, kèm lộ trình gợi ý theo mục tiêu.

## Kết luận

Cài đặt C++ trên Windows không khó, nhưng nó là cửa ải làm nản lòng nhiều người vì các lỗi ở đây thường xuất hiện trước khi người học kịp viết được dòng lệnh nào có ý nghĩa. Bạn chọn một cách phù hợp với hoàn cảnh của mình, chạy cho được chương trình Hello World, rồi mới nghĩ tới việc nâng cấp công cụ.

Và khi dòng chữ đầu tiên hiện ra trên màn hình, phần khó nhất của ngày hôm nay đã qua. Việc còn lại chỉ là mỗi ngày thêm vài dòng nữa vào chương trình vừa chạy được.

<div style="margin-top:36px;border-radius:26px;padding:38px clamp(22px,5vw,48px);color:#fff;background:radial-gradient(circle at 88% -30%,rgba(242,193,61,.38),transparent 42%),linear-gradient(135deg,#1E3A63,#13294a);">
  <p style="margin:0;font-size:.82rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F2C13D;">Bắt đầu với C++</p>
  <p style="margin:10px 0 6px;font-size:1.45rem;font-weight:800;line-height:1.3;color:#fff;">Chạy được Hello World rồi, bạn luyện tiếp ở đâu?</p>
  <p style="margin:0 0 22px;color:#dbe7f3;">Bạn nào muốn luyện code có chấm điểm ngay thì hệ thống chấm tự động luôn mở.</p>
  <p style="display:flex;flex-wrap:wrap;gap:12px;margin:0 0 18px;">
    <a class="btn btn-gold" href="/khoa-hoc-c-cpp-web" style="text-decoration:none;">Khóa học C/C++ từ cơ bản</a>
    <a class="btn btn-light" href="https://code.cothilaptrinh.vn/" style="text-decoration:none;">Luyện code chấm tự động</a>
  </p>
  <p style="margin:0;font-size:.92rem;color:#b7c6dd;">Cần tư vấn lộ trình cho con? Bạn nhắn Zalo 0985 188 655 hoặc xem
    <a href="/lo-trinh" style="color:#fff;">lộ trình học theo độ tuổi</a>.
  </p>
</div>
