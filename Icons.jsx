const ICONS = {
  laptop: (<><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></>),
  video: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M8 5L6 9M13 5l-2 4M18 5l-2 4" /></>),
  code: (<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />),
  music: (<><path d="M9 18V6l10-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="16.5" cy="16" r="2.5" /></>),
  cpu: (<><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>),
  camera: (<><path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="3.5" /></>),
  social: (<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></>),
  pen: (<><path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z" /><path d="M14 7l3 3" /></>),
  cart: (<><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.4 12h11.2L21 7H6" /></>),
  megaphone: (<><path d="M3 10v4a1 1 0 0 0 1 1h3l9 4V5L7 9H4a1 1 0 0 0-1 1z" /><path d="M19.5 9a4 4 0 0 1 0 6M7 15l1.5 5h2.5L10 16" /></>),
  pentool: (<><path d="M12 3l7 9-7 3-7-3z" /><path d="M12 15v6M10.5 21h3" /><circle cx="12" cy="10" r="1.2" /></>),
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>),
  chart: (<><path d="M4 20V4M4 20h16" /><path d="M8 15l3-4 3 2 5-6" /></>),
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>),
  bot: (<><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 8V4.5M9 13v1M15 13v1M9 17h6" /><circle cx="12" cy="3.5" r=".8" /></>),
  image: (<><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.8" /><path d="M21 16l-5-5-8 8" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>),
  zap: (<path d="M13 2L4 14h7l-1 8 9-12h-7z" />),
  shield: (<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>),
  call: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />),
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14c2.8 0 4.5 1.8 4.5 4.5" /></>),
  trend: (<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>),
  star: (<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  arrowUpRight: (<path d="M7 17L17 7M8 7h9v9" />),
  check: (<path d="M5 12.5l4.5 4.5L19 7.5" />),
  chevron: (<path d="M6 9l6 6 6-6" />),
  chevronLeft: (<path d="M15 6l-6 6 6 6" />),
  chevronRight: (<path d="M9 6l6 6-6 6" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6L6 18" />),
  plus: (<path d="M12 5v14M5 12h14" />),
  play: (<path d="M8 5l11 7-11 7z" />),
  home: (<><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  database: (<><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>),
  heart: (<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />),
  message: (<path d="M4 5h16v11H9l-5 4z" />),
  sparkle: (<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />),
  comment: (<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z" />),
  whatsapp: (<><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" /></>),
  instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".8" /></>),
  facebook: (<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 0-.5z" />),
  linkedin: (<><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.7 1-2.5 2.2-2.5S16 11.3 16 13v3" /></>),
};

export default function Icon({ name, size = 24, stroke = 1.6, className = '', title, ...rest }) {
  const body = ICONS[name];
  if (!body) return null;
  return (
    <svg
      viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={`icon ${className}`} aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} focusable="false" {...rest}
    >
      {title && <title>{title}</title>}
      {body}
    </svg>
  );
}

export function GradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="vl-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7B00FF" />
          <stop offset=".5" stopColor="#3B00E4" />
          <stop offset="1" stopColor="#00A2FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
