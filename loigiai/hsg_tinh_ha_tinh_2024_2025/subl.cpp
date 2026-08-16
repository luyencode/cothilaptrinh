// SUBL - Dãy con
// Tìm L nhỏ nhất sao cho MỌI đoạn gồm L phần tử liên tiếp đều có tổng >= m.
// Nhận xét: các a_i đều dương nên tổng nhỏ nhất của đoạn độ dài L không giảm
// khi L tăng, vậy có thể nhị phân L; mỗi lần kiểm tra dùng cửa sổ trượt O(n).
// Nếu tổng cả dãy vẫn nhỏ hơn m thì không có L nào, ghi -1.
// Độ phức tạp: O(n log n).
#include <bits/stdc++.h>
using namespace std;

int n;
long long m;
vector<long long> a;

bool duoc(int L) {                 // mọi đoạn độ dài L đều có tổng >= m ?
    long long s = 0;
    for (int i = 0; i < L; ++i) s += a[i];
    if (s < m) return false;
    for (int i = L; i < n; ++i) {
        s += a[i] - a[i - L];
        if (s < m) return false;
    }
    return true;
}

int main() {
    // freopen("SUBL.INP", "r", stdin);
    // freopen("SUBL.OUT", "w", stdout);
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    if (!(cin >> n >> m)) return 0;
    a.resize(n);
    long long tong = 0;
    for (int i = 0; i < n; ++i) { cin >> a[i]; tong += a[i]; }

    if (tong < m) { cout << -1 << '\n'; return 0; }

    int lo = 1, hi = n, ans = n;
    while (lo <= hi) {
        int giua = lo + (hi - lo) / 2;
        if (duoc(giua)) { ans = giua; hi = giua - 1; }
        else lo = giua + 1;
    }
    cout << ans << '\n';
    return 0;
}
