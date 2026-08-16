// FISH - Nuôi cá cảnh
// Mỗi ngày đàn cá ăn đúng 3 gói, thức ăn thừa dùng được cho ngày sau.
// Vậy 3 gói của ngày i luôn nên mua ở ngày có giá RẺ NHẤT trong 1..i,
// tức là giá trị nhỏ nhất tiền tố. Đáp án = 3 * tổng các giá trị đó.
// Độ phức tạp: O(n).
#include <bits/stdc++.h>
using namespace std;

int main() {
    // freopen("FISH.INP", "r", stdin);
    // freopen("FISH.OUT", "w", stdout);
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    if (!(cin >> n)) return 0;
    long long nhoNhat = LLONG_MAX, tong = 0;
    for (int i = 0; i < n; ++i) {
        long long a;
        cin >> a;
        nhoNhat = min(nhoNhat, a);   // giá rẻ nhất tính đến ngày i
        tong += nhoNhat;
    }
    cout << tong * 3 << '\n';
    return 0;
}
