# -*- coding: utf-8 -*-
# MPRI - Số nguyên tố
# Tìm số nguyên tố p nhỏ nhất thỏa p >= n, trả lời Q truy vấn.
#   - n nhỏ: tra bảng next_prime dựng bằng sàng Eratosthenes, mỗi truy vấn O(1).
#   - n lớn (tới 10^9): dò từng số bằng Miller-Rabin xác định.
import sys

NHO = 1005000
CO_SO = (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37)


def sang():
    hop = bytearray(NHO + 1)
    hop[0] = hop[1] = 1
    i = 2
    while i * i <= NHO:
        if not hop[i]:
            hop[i * i::i] = b"\x01" * len(range(i * i, NHO + 1, i))
        i += 1
    nxt = [0] * (NHO + 1)
    cuoi = 0
    for i in range(NHO, -1, -1):          # quét ngược để lấy số nguyên tố kế tiếp
        if not hop[i]:
            cuoi = i
        nxt[i] = cuoi
    return nxt


def nguyen_to(n):
    """Miller-Rabin với bộ cơ sở cố định, xác định đúng với mọi số dưới 3,3*10^24."""
    if n < 2:
        return False
    for p in CO_SO:
        if n % p == 0:
            return n == p
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1
    for a in CO_SO:
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue
        for _ in range(s - 1):
            x = x * x % n
            if x == n - 1:
                break
        else:
            return False
    return True


def main():
    data = sys.stdin.buffer.read().split()
    q = int(data[0])
    nxt = sang()
    ra = []
    for i in range(1, q + 1):
        n = int(data[i])
        if n <= NHO - 5:
            ra.append(nxt[n if n > 0 else 0])
        else:
            p = n
            while not nguyen_to(p):
                p += 1
            ra.append(p)
    sys.stdout.write("\n".join(map(str, ra)) + "\n")


main()
