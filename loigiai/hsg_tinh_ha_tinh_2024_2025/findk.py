# -*- coding: utf-8 -*-
# FINDK - Số nguyên dương k
# HSG tỉnh lớp 9, Sở GD&ĐT Hà Tĩnh, năm học 2024-2025
# Ý tưởng: cần k lớn nhất với k(k+1)/2 <= n. Dùng isqrt rồi chỉnh lại.
# Độ phức tạp: O(1). Trên judge đọc stdin, ghi stdout.
import sys
from math import isqrt


def main():
    n = int(sys.stdin.buffer.read().split()[0])
    k = isqrt(2 * n)
    while k * (k + 1) // 2 > n:
        k -= 1
    while (k + 1) * (k + 2) // 2 <= n:
        k += 1
    sys.stdout.write(str(k) + "\n")


main()
