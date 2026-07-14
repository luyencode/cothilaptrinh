// Single source of truth for the primary navigation.
// Used by Header.astro (main nav) and Footer.astro (link column).
export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: '/', label: 'Trang chủ' },
  { href: '/khoa-hoc', label: 'Khóa học' },
  { href: '/lo-trinh', label: 'Lộ trình' },
  { href: '/docs', label: 'Tài liệu' },
  { href: '/blog', label: 'Blog' },
  { href: '/ve-co-thi', label: 'Về Cô Thi' },
  { href: '/giang-vien', label: 'Giảng viên' },
  { href: '/cam-nhan', label: 'Cảm nhận' },
  { href: '/lien-he', label: 'Liên hệ' },
];

// Marks a nav item active. Home only matches exactly; every other item
// also matches its sub-paths so course-detail pages highlight "Khóa học"
// (reproducing the original site's behavior).
export function isActive(href: string, currentPath: string): boolean {
  const path = currentPath.replace(/\/$/, '') || '/';
  if (href === '/') return path === '/';
  return path === href || path.startsWith(href + '-') || path.startsWith(href + '/');
}
