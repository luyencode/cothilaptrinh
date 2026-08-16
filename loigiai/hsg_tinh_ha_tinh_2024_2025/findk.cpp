// FINDK - Số nguyên dương k
// HSG tỉnh lớp 9, Sở GD&ĐT Hà Tĩnh, năm học 2024-2025
// Ý tưởng: 1 + 2 + ... + k = k(k+1)/2. Cần k lớn nhất sao cho k(k+1)/2 <= n.
//          Ước lượng bằng căn bậc hai rồi chỉnh lại vài bước cho chắc (n tới 10^18).
// Độ phức tạp: O(1).
// Trên judge đọc stdin, ghi stdout. Nếu làm theo đề gốc (file .INP/.OUT) thì
// bỏ dấu // ở hai dòng freopen bên dưới.
#include <bits/stdc++.h>
using namespace std;

int main() {
    // freopen("FINDK.INP", "r", stdin);
    // freopen("FINDK.OUT", "w", stdout);
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    unsigned long long n;
    if (!(cin >> n)) return 0;

    // ước lượng k xấp xỉ căn bậc hai của 2n
    unsigned long long k = (unsigned long long)(sqrtl(2.0L * (long double)n));
    // lùi về cho an toàn rồi tăng dần, so sánh bằng số nguyên 128 bit
    while (k > 0 && (__int128)k * (k + 1) / 2 > (__int128)n) --k;
    while ((__int128)(k + 1) * (k + 2) / 2 <= (__int128)n) ++k;

    cout << k << '\n';
    return 0;
}
