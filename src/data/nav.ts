// Single source of truth for the primary navigation (Header.astro).
// Hidden for now per client brief 28/10/2026: Lộ trình, Giảng viên, Liên hệ,
// Cảm nhận (merged into Giới thiệu). Their pages live in src/pages/_*.astro.
export interface NavLink {
  href: string;
  label: string;
}

export const nav: NavLink[] = [
  { href: '/', label: 'Trang chủ' },
  { href: '/khoa-hoc', label: 'Khóa học' },
  { href: '/blog', label: 'Bài viết' },
  { href: '/ve-co-thi', label: 'Giới thiệu' },
];

// Marks a nav item active. Home only matches exactly; every other item
// also matches its sub-paths so course-detail pages highlight "Khóa học".
export function isActive(href: string, currentPath: string): boolean {
  const path = currentPath.replace(/\/$/, '') || '/';
  if (href === '/') return path === '/';
  return path === href || path.startsWith(href + '-') || path.startsWith(href + '/');
}
