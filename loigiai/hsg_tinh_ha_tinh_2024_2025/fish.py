# -*- coding: utf-8 -*-
# FISH - Nuôi cá cảnh
# Gói thức ăn cho ngày i nên mua ở ngày rẻ nhất trong 1..i (thừa dùng được sau).
# Đáp án = 3 * tổng các giá trị nhỏ nhất tiền tố. Độ phức tạp: O(n).
import sys


def main():
    data = sys.stdin.buffer.read().split()
    n = int(data[0])
    nho_nhat = float("inf")
    tong = 0
    for i in range(1, n + 1):
        a = int(data[i])
        if a < nho_nhat:
            nho_nhat = a          # giá rẻ nhất tính đến ngày i
        tong += nho_nhat
    sys.stdout.write(str(tong * 3) + "\n")


main()
