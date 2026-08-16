// MPRI - Số nguyên tố
// Với mỗi n, tìm số nguyên tố p nhỏ nhất thỏa p >= n. Đề có tới 10^6 truy vấn.
// Hai trường hợp:
//   - n <= NHO (10^6 và dư): tra bảng nextPrime dựng bằng sàng Eratosthenes,
//     mỗi truy vấn O(1).
//   - n lớn (tới 10^9): dò từng số từ n trở lên bằng Miller-Rabin xác định.
//     Khoảng cách giữa hai số nguyên tố liên tiếp quanh 10^9 chỉ vài trăm.
// Độ phức tạp: O(NHO log log NHO) cho phần sàng, phần còn lại rất nhẹ.
#include <bits/stdc++.h>
using namespace std;
typedef unsigned long long ull;

const int NHO = 1005000;
vector<int> nextPrime;

void sang() {
    vector<char> hop(NHO + 1, 0);
    hop[0] = hop[1] = 1;
    for (int i = 2; (long long)i * i <= NHO; ++i)
        if (!hop[i])
            for (int j = i * i; j <= NHO; j += i) hop[j] = 1;
    nextPrime.assign(NHO + 1, 0);
    int cuoi = 0;
    for (int i = NHO; i >= 0; --i) {          // quét ngược để lấy số nguyên tố kế tiếp
        if (!hop[i]) cuoi = i;
        nextPrime[i] = cuoi;
    }
}

ull nhanMod(ull a, ull b, ull m) { return (__uint128_t)a * b % m; }

ull luyThuaMod(ull a, ull e, ull m) {
    ull r = 1; a %= m;
    while (e) { if (e & 1) r = nhanMod(r, a, m); a = nhanMod(a, a, m); e >>= 1; }
    return r;
}

// Miller-Rabin với bộ cơ sở cố định, xác định đúng với mọi số dưới 3,3 * 10^24
bool nguyenTo(ull n) {
    if (n < 2) return false;
    for (ull p : {2ULL, 3ULL, 5ULL, 7ULL, 11ULL, 13ULL, 17ULL, 19ULL, 23ULL,
                  29ULL, 31ULL, 37ULL})
        if (n % p == 0) return n == p;
    ull d = n - 1; int s = 0;
    while (!(d & 1)) { d >>= 1; ++s; }
    for (ull a : {2ULL, 3ULL, 5ULL, 7ULL, 11ULL, 13ULL, 17ULL, 19ULL, 23ULL,
                  29ULL, 31ULL, 37ULL}) {
        ull x = luyThuaMod(a, d, n);
        if (x == 1 || x == n - 1) continue;
        bool ok = false;
        for (int i = 1; i < s; ++i) {
            x = nhanMod(x, x, n);
            if (x == n - 1) { ok = true; break; }
        }
        if (!ok) return false;
    }
    return true;
}

int main() {
    // freopen("MPRI.INP", "r", stdin);
    // freopen("MPRI.OUT", "w", stdout);
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    sang();

    int q;
    if (!(cin >> q)) return 0;
    string ra;
    ra.reserve((size_t)q * 11);
    char dem[24];
    while (q--) {
        long long n;
        cin >> n;
        long long p;
        if (n <= NHO - 5) {
            p = nextPrime[n < 0 ? 0 : n];
        } else {
            p = n;
            while (!nguyenTo((ull)p)) ++p;
        }
        int len = snprintf(dem, sizeof(dem), "%lld\n", p);
        ra.append(dem, len);
    }
    fwrite(ra.data(), 1, ra.size(), stdout);
    return 0;
}
