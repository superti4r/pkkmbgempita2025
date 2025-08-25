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
    { label: "Dokumentasi", href: "https://drive.google.com/drive/folders/1Y6uarTH4jqIb9cJNYUeBPR-KKBSTesg0", icon: "Folder"},
    { label: "Validasi Data", href: "https://drive.google.com/drive/folders/10OsdGpw7zK0mQvikC12bjTMwN7RXX9qv", icon: "Paperclip"},
    { label: "Papermob PKKMB Gempita 2025", href: "https://drive.google.com/drive/folders/1DGOXQ5E_xnLGMDAb7ZdFFgnUsGK2Xx3e", icon: "Clapperboard"},
    { label: "Teaser PKKMB Gempita 2025", href: "https://drive.google.com/drive/folders/1DK8dBnLo8sTlTKp5vCAPLyqy8QKCGzvz", icon: "Clapperboard"},
    { label: "After Movie PKKMB Gempita 2025", href: "https://drive.google.com/drive/folders/1DHP2QbZs9ZdGxI4V1n6V-bivVTtQ4icY", icon: "Clapperboard"},
    { label: "Dokumentasi Pra-PKKMB", href: "https://drive.google.com/drive/folders/1ZazeN9vbuScp27F5eGDTGq_aY7l7c_34", icon: "Package", badge:"Ngawi"},
    { label: "Dokumentasi Pra-PKKMB", href: "https://drive.google.com/drive/folders/1MschxS6Ds-zsdpEJ9dYg9OmBAvTbuH7H", icon: "Package", badge:"Nganjuk"},
    { label: "Dokumentasi Pra-PKKMB", href: "https://drive.google.com/drive/folders/1h7yeAWURNoCeiqzNP7Dwqr8kBvqm-2DL", icon: "Package", badge:"Bondowoso"},
    { label: "Dokumentasi Pra-PKKMB", href: "https://drive.google.com/drive/folders/1BG-TEqBeDHrusfWr5UtF4qWIn2mEXZUP", icon: "Package", badge:"Sabu Raijua"},
    { label: "Dokumentasi Drone", href: "https://drive.google.com/drive/folders/1oWw4HN8Jplw59ZwXCaBf7a6xA16VqfBD", icon: "Film"},
  ]
};
