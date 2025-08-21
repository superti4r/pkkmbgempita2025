export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
};

export type SiteConfig = {
  title: string;
  avatar?: string;
  links: SocialLink[];
};

export const siteConfig: SiteConfig = {
  title: "PKKMB Gempita 2025",
  avatar: "/pkkmbgempita2025.png",
  links: [
    { label: "Instagram Resmi", href: "https://www.instagram.com/pkkmbpolije/", icon: "Instagram" },
    { label: "Dokumentasi", href: "https://drive.google.com/drive/folders/1Y6uarTH4jqIb9cJNYUeBPR-KKBSTesg0?usp=sharing", icon: "Folder", badge: "MABA" },
  ]
};
