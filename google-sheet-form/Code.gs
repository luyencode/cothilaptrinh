// ===== Google Apps Script: nhận dữ liệu form "Liên hệ" và ghi vào Google Sheet =====
// Dán TOÀN BỘ file này vào Apps Script của Google Sheet:
//   Trong Sheet  ->  Extensions (Tiện ích mở rộng)  ->  Apps Script  ->  dán  ->  Save.
// Sau đó: Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.

var SHEET_NAME = 'LienHe';

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) { sh = ss.insertSheet(SHEET_NAME); }
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Thời gian', 'Họ tên', 'SĐT / Zalo', 'Quan tâm khóa', 'Lời nhắn', 'Trang']);
    }
    var p = (e && e.parameter) ? e.parameter : {};
    sh.appendRow([
      p.thoigian || new Date(),
      p.hoten || '',
      p.sdt || '',
      p.khoa || '',
      p.loinhan || '',
      p.trang || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('Cô Thi Lập Trình - form endpoint đang hoạt động.');
}

// (Tùy chọn) Nhận email mỗi khi có người gửi: bỏ ghi chú đoạn dưới và đặt email của bạn.
// function notify(p){
//   MailApp.sendEmail('email-cua-ban@gmail.com', 'Liên hệ mới tu website',
//     'Họ tên: ' + (p.hoten||'') + '\nSĐT/Zalo: ' + (p.sdt||'') +
//     '\nKhóa: ' + (p.khoa||'') + '\nLời nhắn: ' + (p.loinhan||''));
// }
