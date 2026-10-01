// Website showcase. Images live in /public/assets/web/. Add or edit entries freely;
// width/height must match the image so the layout does not shift.
export const webProjects = [
  {
    id: 'web-01', name: 'Luxe Haven', industry: 'Luxury Real Estate',
    image: '/assets/web/web-01.jpg', width: 711, height: 1600,
    description:
      'A refined property website for a luxury real estate brand. A cinematic oceanfront hero leads into a property search bar, featured listings, floor plan viewer and agent profiles. The warm gold-and-cream palette and serif headings keep the tone calm and exclusive, while the consultation form sits at the end of every journey.',
  },
  {
    id: 'web-02', name: 'Dubai Care Clinic', industry: 'Healthcare / Clinic',
    image: '/assets/web/web-02.jpg', width: 762, height: 1600,
    description:
      'A clinic website designed to build trust in the first few seconds. It combines a friendly hero, an at-a-glance appointment booking panel, specialty cards, doctor profiles with availability and an emergency helpline block. A clean white layout with confident orange accents keeps everything clear and easy to scan.',
  },
  {
    id: 'web-03', name: 'Velora', industry: 'E-commerce Store',
    image: '/assets/web/web-03.jpg', width: 791, height: 1600,
    description:
      'A luxury perfume storefront with soft blush tones and editorial photography. Key features include a bestseller grid with add-to-cart buttons, scent-note discovery, an interactive fragrance quiz and review cards. The design leans on generous whitespace so each bottle feels like a gallery piece.',
  },
  {
    id: 'web-04', name: 'Royal Gems & Co.', industry: 'Fashion & Jewellery Brand',
    image: '/assets/web/web-04.jpg', width: 705, height: 1600,
    description:
      'A fine jewellery brand site built around close-up product photography and a champagne-gold palette. It features collection tiles, a best-sellers rail, a ring size guide and a brand promise strip. Elegant serif type and soft fabric textures give the whole experience a handcrafted feel.',
  },
  {
    id: 'web-05', name: 'Apex Auto Detailing', industry: 'Automotive Service Business',
    image: '/assets/web/web-05.jpg', width: 762, height: 1600,
    description:
      'A lead-focused website for a mobile car detailing service. A bold hero with a quick-booking card captures enquiries immediately, followed by priced service packages, a four-step process, before-and-after comparisons and a free consultation form. Deep burgundy accents keep it premium and memorable.',
  },
  {
    id: 'web-06', name: 'PawJoy', industry: 'Pet Shop & Grooming',
    image: '/assets/web/web-06.jpg', width: 733, height: 1600,
    description:
      'A playful but organised site that combines grooming bookings with an online pet store. Colourful service cards, a limited-time offer banner, a product grid and customer reviews keep the page lively without feeling cluttered. Rounded shapes and illustrated accents give the brand a warm personality.',
  },
  {
    id: 'web-07', name: 'GreenCare Services', industry: 'Home & Garden Services',
    image: '/assets/web/web-07.jpg', width: 720, height: 1600,
    description:
      'A booking-first website for a gardening and home cleaning company. The hero includes a quick service booking card, followed by service categories, a simple four-step guide, transparent pricing tabs and a consultation form. Fresh greens and clean white space communicate reliability and care.',
  },
  // To add an 8th mockup: drop web-08.jpg into /public/assets/web/ and uncomment.
  // {
  //   id: 'web-08', name: 'Project name', industry: 'Industry',
  //   image: '/assets/web/web-08.jpg', width: 760, height: 1600,
  //   description: '2 to 4 sentences: what was built, the design approach, key features.',
  // },
];

export const whyWebsite = {
  intro:
    'For most customers, your website is the first real conversation they have with your business, and it happens long before anyone picks up the phone. A well-built site works every hour of the day: it explains what you do, proves you can be trusted, answers questions and turns interest into enquiries or sales. Here is what that means in practice.',
  items: [
    { icon: 'shield', title: 'Credibility and trust', text: 'People check a business online before they buy. A polished, secure and consistent website tells visitors you are established and serious, which makes every other marketing channel work harder.' },
    { icon: 'clock', title: 'Open 24/7', text: 'Your website never closes. It answers common questions, shows your work and collects enquiries at midnight or on a holiday, so you do not lose customers just because the office is shut.' },
    { icon: 'target', title: 'Lead generation', text: 'Clear calls to action, contact forms and WhatsApp buttons turn browsers into conversations. A good site is designed around the next step you want a visitor to take.' },
    { icon: 'search', title: 'SEO and visibility', text: 'When someone searches for what you offer, a fast, well-structured website gives you a chance to be found. Without one, you depend entirely on platforms you do not control.' },
    { icon: 'layers', title: 'Brand control', text: 'Social platforms change their rules and reach overnight. Your own website is the one place where your design, message and customer data are fully yours.' },
    { icon: 'cart', title: 'Selling online', text: 'From a simple order form to a complete store, a website lets you take orders and payments beyond your local area, without being limited by opening hours or location.' },
    { icon: 'trend', title: 'Competitive advantage', text: 'If a competitor looks sharper and easier to contact online, they get the first call. A strong website levels the field, and lets a smaller business look as capable as a larger one.' },
    { icon: 'phone', title: 'Mobile-first reach', text: 'Most visitors arrive on a phone. A responsive website loads quickly, reads clearly on small screens and makes calling, messaging or ordering a single tap.' },
  ],
};
