#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""make_codesnap.py - sinh khoi code HTML kieu VSCode CodeSnap co SO DONG,
inline style, dan thang vao bai blog markdown (Astro cho phep raw HTML).

Dung: python3 make_codesnap.py <file.cpp|.py> "<ten hien thi>" > khoi.html
Hay import: tu make_codesnap import codesnap
"""
import sys
from pygments import highlight
from pygments.lexers import CppLexer, PythonLexer
from pygments.formatters import HtmlFormatter

NEN = "#1e1e2e"      # nen than code, toi kieu VSCode
NEN_BAR = "#181825"  # thanh tieu de
VIEN = "#313244"
CHU_TEN = "#cdd6f4"
SO_DONG = "#6c7086"

class _Fmt(HtmlFormatter):
    def wrap(self, source):
        return self._wrap_code(source)
    def _wrap_code(self, source):
        for i, t in source:
            yield i, t

def codesnap(ma_nguon, ten_file, lang="cpp"):
    lexer = CppLexer() if lang == "cpp" else PythonLexer()
    fmt = _Fmt(noclasses=True, style="dracula", nowrap=True)
    body = highlight(ma_nguon.rstrip("\n"), lexer, fmt)
    dong = body.rstrip("\n").split("\n")
    rows = []
    for i, d in enumerate(dong, 1):
        rows.append(
            f'<tr><td style="padding:0 14px 0 18px;text-align:right;'
            f'user-select:none;color:{SO_DONG};font-size:.8rem;'
            f'vertical-align:top;border-right:1px solid {VIEN};">{i}</td>'
            f'<td style="padding:0 0 0 14px;white-space:pre;">{d if d.strip() else "&nbsp;"}</td></tr>')
    cham = "".join(
        f'<span style="display:inline-block;width:12px;height:12px;border-radius:50%;'
        f'background:{m};margin-right:7px;"></span>'
        for m in ("#f38ba8", "#f9e2af", "#a6e3a1"))
    return (
        f'<div style="margin:18px 0 26px;border-radius:16px;overflow:hidden;'
        f'border:1px solid {VIEN};box-shadow:0 10px 26px rgba(17,17,27,.35);">'
        f'<div style="display:flex;align-items:center;padding:11px 16px;background:{NEN_BAR};">'
        f'{cham}<span style="margin-left:6px;color:{CHU_TEN};font-size:.85rem;'
        f'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;">{ten_file}</span></div>'
        f'<div style="background:{NEN};overflow-x:auto;">'
        f'<table style="border-collapse:collapse;width:100%;margin:0;'
        f'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;'
        f'font-size:.86rem;line-height:1.6;color:#cdd6f4;">'
        f'<tbody style="display:table-row-group;">'
        + "".join(rows) +
        f'</tbody></table></div></div>')

if __name__ == "__main__":
    duong, ten = sys.argv[1], sys.argv[2]
    lang = "python" if duong.endswith(".py") else "cpp"
    print(codesnap(open(duong, encoding="utf-8").read(), ten, lang))
