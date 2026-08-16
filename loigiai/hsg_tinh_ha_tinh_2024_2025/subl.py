# -*- coding: utf-8 -*-
# SUBL - Dãy con
# Tìm L nhỏ nhất sao cho mọi đoạn L phần tử liên tiếp có tổng >= m.
# a_i dương nên tổng nhỏ nhất theo độ dài L không giảm, vậy nhị phân được L.
# Độ phức tạp: O(n log n).
import sys
from itertools import accumulate


def main():
    data = sys.stdin.buffer.read().split()
    n = int(data[0]); m = int(data[1])
    a = list(map(int, data[2:2 + n]))
    tien_to = [0] + list(accumulate(a))
    if tien_to[n] < m:
        sys.stdout.write("-1\n")
        return

    def duoc(L):                  # mọi đoạn độ dài L đều có tổng >= m ?
        for i in range(L, n + 1):
            if tien_to[i] - tien_to[i - L] < m:
                return False
        return True

    lo, hi, ans = 1, n, n
    while lo <= hi:
        giua = (lo + hi) // 2
        if duoc(giua):
            ans = giua
            hi = giua - 1
        else:
            lo = giua + 1
    sys.stdout.write(str(ans) + "\n")


main()
