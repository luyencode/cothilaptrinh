// Single source of truth for the primary navigation.
// Used by Header.astro (main nav, with dropdown groups) and Footer.astro (curated link column).
export interface NavLink {
  href: string;
  label: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavEntry = NavLink | NavGroup;

export function isGroup(entry: NavEntry): entry is NavGroup {
  return 'children' in entry;
}

export const nav: NavEntry[] = [
  { href: '/', label: 'Trang chủ' },
  { href: '/khoa-hoc', label: 'Khóa học' },
  { href: '/lo-trinh', label: 'Lộ trình' },
  {
    label: 'Chia sẻ',
    children: [
      { href: '/docs', label: 'Bài học' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    label: 'Giới thiệu',
    children: [
      { href: '/ve-co-thi', label: 'Về Cô Thi' },
      { href: '/giang-vien', label: 'Giảng viên' },
    ],
  },
  { href: '/cam-nhan', label: 'Cảm nhận' },
  { href: '/lien-he', label: 'Liên hệ' },
];

// Curated subset for the footer's single-column link list - trimmed to the
// essentials (home is dropped since the logo already links there; Tài
// liệu/Blog/Cảm nhận are secondary and stay reachable via the header).
export const footerLinks: NavLink[] = [
  { href: '/khoa-hoc', label: 'Khóa học' },
  { href: '/lo-trinh', label: 'Lộ trình' },
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

export function isGroupActive(group: NavGroup, currentPath: string): boolean {
  return group.children.some((child) => isActive(child.href, currentPath));
}
