// Single place to update every contact / social URL on the site.
export const LINKEDIN_URL = ''; // paste your LinkedIn page URL here; the icon/card stays hidden while empty

export const WHATSAPP_URL = 'https://wa.me/923197015301';
export const WHATSAPP_DISPLAY = '03197015301';
export const EMAIL = 'vextraloomhello@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/vextraloom.io/';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594501937389';

export const SOCIALS = [
  { key: 'instagram', label: 'Instagram', icon: 'instagram', href: INSTAGRAM_URL, handle: '@vextraloom.io' },
  { key: 'facebook', label: 'Facebook', icon: 'facebook', href: FACEBOOK_URL, handle: 'VEXTRALOOM on Facebook' },
  { key: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp', href: WHATSAPP_URL, handle: WHATSAPP_DISPLAY },
  { key: 'gmail', label: 'Gmail', icon: 'mail', href: `mailto:${EMAIL}`, handle: EMAIL },
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin', href: LINKEDIN_URL, handle: 'VEXTRALOOM on LinkedIn' },
].filter((s) => s.href);

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', mega: true },
  { to: '/contact', label: 'Contact' },
];
