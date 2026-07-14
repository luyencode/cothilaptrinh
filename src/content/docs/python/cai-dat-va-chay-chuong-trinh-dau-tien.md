---
title: "Cài đặt Python và chạy chương trình đầu tiên"
description: "Hướng dẫn cài đặt Python và chạy dòng lệnh print() đầu tiên trên máy tính của bạn."
section: "Nhập môn Python"
sectionOrder: 2
order: 1
---

Bài này hướng dẫn cài đặt Python và chạy chương trình đầu tiên - kinh điển với dòng lệnh `print("Hello")`.

## Bước 1 - Cài đặt Python

Truy cập [python.org/downloads](https://www.python.org/downloads/) và tải bản Python mới nhất cho hệ điều hành của bạn (Windows/macOS/Linux). Khi cài đặt trên Windows, nhớ tick vào ô **"Add Python to PATH"**.

## Bước 2 - Kiểm tra Python đã cài đặt thành công

Mở Terminal (macOS/Linux) hoặc Command Prompt (Windows), gõ:

```bash
python --version
```

Nếu hiện ra số phiên bản (ví dụ `Python 3.12.1`), bạn đã cài đặt thành công.

## Bước 3 - Viết chương trình đầu tiên

Tạo một file mới tên `hello.py`, mở bằng bất kỳ trình soạn thảo (VS Code, Notepad...) và gõ:

```python
print("Xin chào, tôi đang học Python!")
```

## Bước 4 - Chạy chương trình

Trong Terminal/Command Prompt, di chuyển tới thư mục chứa file và chạy:

```bash
python hello.py
```

Bạn sẽ thấy dòng chữ hiện ra ngay trên màn hình.

> **Lưu ý:** Trên một số máy, lệnh có thể là `python3` thay vì `python` - nếu `python --version` không hoạt động, hãy thử `python3 --version`.

Chúc mừng bạn đã chạy chương trình Python đầu tiên! Ở các bài sau, chúng ta sẽ tìm hiểu về biến, kiểu dữ liệu và vòng lặp.
